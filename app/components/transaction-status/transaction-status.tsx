import * as React from "react"
import { StyleProp, View, ViewStyle, Text, Image } from "react-native"
import { observer } from "mobx-react-lite"
import styling from "./transaction-status.style"
import { useEffect, useState } from "react"
import { color } from "../../theme"

export interface TransactionStatusProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  status?: "Received" | "Failed" | "Sent" | string
}

/**
 * Describe your component here
 */
export const TransactionStatus = observer(function TransactionStatus(
  props: TransactionStatusProps,
) {
  const { style } = props
  const styles = Object.assign({}, styling.container, style)
  const [status, setStatus] = useState(undefined)
  const [statusColor, setStatusColor] = useState(color.received)

  useEffect(() => {
    switch (props.status) {
      case "Received":
        setStatusColor(color.received)
        setStatus(require("./assets/received.png"))
        break
      case "Failed":
        setStatusColor(color.failed)
        setStatus(require("./assets/failed.png"))
        break
      case "Sent":
        setStatusColor(color.sent)
        setStatus(require("./assets/sent.png"))
        break

      default:
        setStatus(undefined)
        break
    }
  }, [props.status])

  return (
    <>
      {props.status ? (
        <View style={[styles, { backgroundColor: statusColor }]}>
          <Image source={status} style={styling.statusIcon} />
          <Text style={styling.status}>{props.status}</Text>
        </View>
      ) : undefined}
    </>
  )
})
