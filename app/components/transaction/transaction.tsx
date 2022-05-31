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
  const styles = Object.assign({}, styling.container, style)

  const profileImage = require("./profile.png")
  

  return (
    <View style={styles}>
      <View style={styling.userInfo}>
        <Image source={profileImage} style={styling.profileImage} />
        <View>
          <Text style={styling.nameOfUser}>Name of User</Text>
          <TransactionStatus status="Received" />
        </View>
      </View>
      <View style={styling.currencyContainer}>
        <Image source={require("../../../assets/images/currency.png")} style={styling.currencyIcon} />
        <Text style={styling.currentBalance}>200,000</Text>
      </View>
    </View>
  )
})
