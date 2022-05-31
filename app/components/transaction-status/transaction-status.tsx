import * as React from "react"
import { StyleProp, View, ViewStyle, Text } from "react-native"
import { observer } from "mobx-react-lite"
import styling from "./transaction-status.style"

export interface TransactionStatusProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  status?: string
}

/**
 * Describe your component here
 */
export const TransactionStatus = observer(function TransactionStatus(
  props: TransactionStatusProps,
) {
  const { style } = props
  const styles = Object.assign({}, styling.container, style)

  return (
    <>
      {props.status ? (
        <View style={styles}>
          <Text style={styling.status}>{props.status}</Text>
        </View>
      ) : undefined}
    </>
  )
})
