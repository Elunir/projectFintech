import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TouchableOpacity, View, Text, Image } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { StatusBar } from "expo-status-bar"
import { Header, Sheet, Text as CustomText, Transaction, TransactionStatus } from "../../components"
import styles from "./home-styles"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `home: undefined` to NavigatorParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="home" component={HomeScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = observer(
  function HomeScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    const currencyIcon = require("./currency.png")

    const rightSideButton = (
      <TouchableOpacity style={styles.headerButton}>
        <Text style={styles.headerButtonTitle}>Add Money</Text>
      </TouchableOpacity>
    )

    return (
      <View testID="HomeScreen" style={styles.root}>
        <StatusBar style="light" />
        <Header
          headerText="Hello Sandra,"
          leftIcon="menu"
          style={styles.header}
          titleStyle={styles.headerTitle}
          rightButton={rightSideButton}
        />
        <View style={styles.currentBalanceContainer}>
          <Text style={styles.currentBalanceText}>Your current balance is</Text>
          <View style={styles.currencyContainer}>
            <Image source={currencyIcon} style={styles.currencyIcon} />
            <Text style={styles.currentBalance}>200,000</Text>
          </View>
        </View>
        <View style={styles.transactionTypeContainer}>
          <TouchableOpacity style={styles.transactionTypeButton}>
            <Text style={styles.transactionTypeText}>Request Money</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.transactionTypeButton}>
            <Text style={styles.transactionTypeText}>Send Money</Text>
          </TouchableOpacity>
        </View>
        <Sheet>
          <Transaction />
        </Sheet>
      </View>
    )
  },
)