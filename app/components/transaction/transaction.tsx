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
  name: string
  status?: "Received" | "Failed" | "Sent" | string
  amount: string
}

/**
 * Describe your component here
 */
export const Transaction = observer(function Transaction(props: TransactionProps) {
  const { style, name, status, amount } = props
  const styles = Object.assign({}, styling.container, style)

  const profileImage = require("./profile.png")

  return (
    <View style={styles}>
      <View style={styling.userImage}>
        <Image source={profileImage} style={styling.profileImage} />
        <View style={styling.userInfo}>
          <Text style={styling.nameOfUser}>{name}</Text>
          <TransactionStatus status={status} />
        </View>
      </View>
      <View style={styling.currencyContainer}>
        <Image
          source={require("../../../assets/images/currency.png")}
          style={styling.currencyIcon}
        />
        <Text style={styling.currentBalance}>{amount}</Text>
      </View>
    </View>
  )
})
