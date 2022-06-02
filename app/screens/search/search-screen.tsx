import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, Image, Text, TouchableOpacity } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { goBack, NavigatorParamList } from "../../navigators"
import { Header, Sheet } from "../../components"
import styles from "./search-styles"

export const SearchScreen: FC<StackScreenProps<NavigatorParamList, "search">> = observer(
  function SearchScreen() {
    return (
      <View testID="Search" style={styles.root}>
        <Image source={require("../../../assets/images/circle.png")} style={styles.image} />
        <Header
          leftIcon="backButton"
          iconSize={60}
          onLeftPress={goBack}
          style={styles.header}
          searchBar={true}
          searchBarStyle={styles.searchBar}
        />
        <View style={styles.container}>
          <View style={styles.containerCenter}>
            <View style={styles.userImageBorder}>
              <Image
                source={require("../../../assets/images/profile.png")}
                style={styles.userImage}
              />
            </View>
            <Text style={styles.userNameProfile}>Adeleke Ramon</Text>
          </View>
          <Sheet snap={["54%"]}>
            <View style={styles.containerCenter}>
              <Image
                source={require("../../../assets/images/profile.png")}
                style={styles.profileImage}
              />
              <Text style={styles.userName}>Adeleke Adeyanju</Text>
              <Text style={styles.userPhone}>(+234) 905 1694 275</Text>
              <TouchableOpacity style={styles.buttonContinue}>
                <Text style={styles.buttonContinueText}>Send Money</Text>
              </TouchableOpacity>
            </View>
          </Sheet>
        </View>
      </View>
    )
  },
)
