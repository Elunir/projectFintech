/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React, { FC } from "react"
import { View, Text } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { AutoImage as Image } from "../../components"
import { NavigatorParamList } from "../../navigators"
import AppIntroSlider from "react-native-app-intro-slider"
import { TouchableOpacity } from "react-native-gesture-handler"
import styles from './welcome-styles'

const data = [
  {
    id: 0,
    title: "Transfer That Is Safe",
    text: "Description.\nSay something cool",
    image: require("./lock.png"),
  },
  {
    id: 1,
    title: "Title 2",
    text: "Other cool stuff",
    image: require("./lock.png"),
  },
  {
    id: 2,
    title: "Rocket guy",
    text: "I'm already out of descriptions\nLorem ipsum bla bla bla",
    image: require("./lock.png"),
  },
]

export const WelcomeScreen: FC<StackScreenProps<NavigatorParamList, "welcome">> = observer(
  ({ navigation }) => {
    const homeScreen = () => navigation.navigate("home")


    const _renderItem = ({ item }) => {
      const { title, text, image } = item
      return (
        <View style={styles.slide}>
          <Image source={image} style={styles.image} />
          <View style={styles.container}>
            {_renderPagination(item.id)}
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity style={styles.button} onPress={homeScreen}>
              <Text style={styles.buttonText}>Start banking</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }

    const _keyExtractor = (item) => item.title

    const _renderPagination = (activeIndex: number) => {
      return (
        <View style={styles.paginationContainer}>
          {data.length > 1 &&
            data.map((_, i) => (
              <TouchableOpacity
                key={i}
                style={i === activeIndex ? styles.dotActive : styles.dots}
                onPress={() => {
                  console.log(i)
                }}
              />
            ))}
        </View>
      )
    }

    return (
      <View testID="WelcomeScreen" style={{ flex: 1 }}>
        <AppIntroSlider
          keyExtractor={_keyExtractor}
          renderItem={_renderItem}
          data={data}
          showNextButton={false}
          showDoneButton={false}
          initialScrollIndex={0}
          dotStyle={null}
          activeDotStyle={null}
          onSlideChange={(index) => {
            if (index === data.length - 1) {
              setTimeout(() => {
                homeScreen()
              }, 500)
            }
          }}
        />
      </View>
    )
  },
)
