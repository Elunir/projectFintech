import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TouchableOpacity, View, Text, Image, FlatList } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { navigate, NavigatorParamList } from "../../navigators"
import { StatusBar } from "expo-status-bar"
import { Header, Sheet, Transaction } from "../../components"
import styles from "./home-styles"
import { color } from "../../theme"
import transactionList from "./transactions"
import { Ionicons } from "@expo/vector-icons"


export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = observer(
  function HomeScreen() {
    const currencyIcon = require("../../../assets/images/currency.png")

    const rightSideButton = (
      <TouchableOpacity style={styles.headerButton}>
        <Text style={styles.headerButtonTitle}>Add Money</Text>
      </TouchableOpacity>
    )

    const _renderItem = ({ item, index }) => (
      <Transaction
        style={
          index % 2 == 0
            ? {
                backgroundColor: color.palette.primaryBlueDark,
              }
            : {
                backgroundColor: color.palette.primaryBlueDarker,
              }
        }
        name={item.name}
        status={item.status}
        amount={item.amount}
      />
    )

    function sendMoney(){
      navigate('newRequest',{})
    }

    return (
      <View testID="HomeScreen" style={styles.root}>
        <StatusBar style="light" />
        <Header
          headerText="Hello Sandra,"
          leftIcon="menu"
          iconSize={48}
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
          <TouchableOpacity style={styles.transactionTypeButton} onPress={sendMoney}>
            <Text style={styles.transactionTypeText}>Send Money</Text>
          </TouchableOpacity>
        </View>
        <Sheet>
        <View style={styles.bottomSheetHeader}>
          <Text style={styles.bottomSheetHeaderTitle}>All Transactions</Text>
          <View style={styles.bottomSheetHeaderSort}>
            <Text style={styles.bottomSheetHeaderSortBy}>Sort by:</Text>
            <TouchableOpacity style={styles.bottomSheetHeaderSort}>
              <Text style={styles.bottomSheetHeaderSortTitle}>Recents</Text>
              <Ionicons name="chevron-down" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
          <FlatList
            data={transactionList.transactions}
            renderItem={_renderItem}
            keyExtractor={(item) => item.name}
            style={styles.transactionList}
            scrollEnabled={true}
          />
        </Sheet>
      </View>
    )
  },
)
