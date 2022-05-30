import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { Platform, StyleSheet, TouchableOpacity, View, Text, Image } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { StatusBar } from "expo-status-bar"
import { Header } from "../../components"

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
      </View>
    )
  },
)

const styles = StyleSheet.create({
  root: {
    backgroundColor: color.primaryDarker,
    flex: 1,
  },
  header: {
    marginTop: Platform.OS === "ios" ? 40 : 24,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    lineHeight: 15,
    textAlign: "left",
    marginLeft: spacing[4],
    fontWeight: "bold",
    paddingTop: spacing[3],
  },
  headerButton: {
    backgroundColor: color.palette.primaryBlueDark,
    padding: spacing[2],
    borderRadius: 8,
  },
  headerButtonTitle: {
    color: color.palette.primaryBlueLight,
    fontSize: 15,
    fontWeight: "700",
  },
  currentBalanceContainer: {
    flexDirection: "column",
    marginHorizontal: spacing[4],
  },
  currentBalanceText: {
    fontSize: 14,
    color: color.palette.white,
    fontWeight: "400",
    marginTop: spacing[4],
  },
  currentBalance: {
    fontSize: 40,
    color: color.palette.white,
    fontWeight: "700",
  },
  currencyIcon: {
    width: 32,
    height: 32,
    marginRight: spacing[2],
  },
  currencyContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing[5],
  },
  transactionTypeContainer:{
    flexDirection: 'row',
    marginHorizontal: spacing[4],
    justifyContent: 'space-between',
    marginVertical: spacing[3],
  },
  transactionTypeButton:{
    padding: spacing[4],
    borderColor: color.palette.primaryBlueLighter,
    borderWidth: 1,
    borderRadius: 8,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60
  },
  transactionTypeText:{
    color: color.palette.primaryBlueLighter,
    fontSize: 16,
    fontWeight: "600",
  }
})
