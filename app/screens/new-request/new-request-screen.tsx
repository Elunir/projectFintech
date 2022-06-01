import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, Image, Text } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { goBack, NavigatorParamList } from "../../navigators"
import { Header } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import styles from "./new-request-styles"
import { TouchableOpacity } from "react-native-gesture-handler"

export const NewRequestScreen: FC<StackScreenProps<NavigatorParamList, "newRequest">> = observer(
  function NewRequestScreen() {
    const backgroundImage = require("../../../assets/images/backgroundShape.png")

    return (
      <View testID="HomeScreen" style={styles.root}>
        <Image source={backgroundImage} style={styles.image} />
        <Header
          headerText="New Request"
          leftIcon="backButton"
          iconSize={60}
          onLeftPress={goBack}
          style={styles.header}
          titleStyle={styles.headerTitle}
        />
        <View style={styles.container}>
          <View style={styles.profileImageBorderOne}>
            <View style={styles.profileImageBorderTwo}>
              <Image
                source={require("../../../assets/images/profile.png")}
                style={styles.profileImage}
              />
            </View>
          </View>
          <Text style={styles.userName}>Adeleke Ramon</Text>
          <Text style={styles.text}>is requesting for:</Text>
          <View style={styles.currentBalanceContainer}>
            <View style={styles.currencyContainer}>
              <Image
                source={require("../../../assets/images/currency.png")}
                style={styles.currencyIcon}
              />
              <Text style={styles.currentBalance}>200,000</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.buttonSendMoney}>
              <Text style={styles.buttonSendMoneyText}>Send Money</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDontSend}>
              <Text style={styles.buttonDontSendText}>Don't Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  },
)
