import * as React from "react"
import { StyleProp, View, ViewStyle, Image } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "../text/text"
import { styling } from "./transaction.style"
import { TransactionStatus } from "../transaction-status/transaction-status"


export interface TransactionProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const Transaction = observer(function Transaction(props: TransactionProps) {
  const { style } = props
  const styles = Object.assign({},styling.container, style)

  const profileImage = require("./profile.png")

  return (
    <View style={styles}>
      <Image source={profileImage} style={styling.profileImage} />
      <View>
        <Text style={styling.nameOfUser}>Name of User</Text>
        <TransactionStatus status={"Failed"} />
      </View>
    </View>
  )
})
