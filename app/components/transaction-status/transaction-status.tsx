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
  status?: "Received" | "Failed" | "Sent"
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
  const [statusColor, setStatusColor] = useState(undefined)

  useEffect(() => {
    switch (props.status) {
      case "Received":
        setStatusColor(color.received)
        return setStatus(require("./assets/received.png"))
      case "Failed":
      setStatusColor(color.failed)
        return setStatus(require("./assets/failed.png"))
      case "Sent":
        setStatusColor(color.sent)
        return setStatus(require("./assets/sent.png"))

      default:
        break
    }
  }, [])

  return (
    <>
      {props.status ? (
        <View style={[styles, {backgroundColor: statusColor}]}>
          <Image source={status} style={styling.statusIcon} />
          <Text style={styling.status}>{props.status}</Text>
        </View>
      ) : undefined}
    </>
  )
})
