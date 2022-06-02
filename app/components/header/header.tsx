/* eslint-disable react-native/no-inline-styles */
import React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { HeaderProps } from "./header.props"
import { Button } from "../button/button"
import { Text } from "../text/text"
import { Icon } from "../icon/icon"
import { color, spacing } from "../../theme"
import { translate } from "../../i18n/"
import SearchBar from "react-native-dynamic-search-bar"

// static styles
const ROOT: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: spacing[4],
  alignItems: "center",
  paddingTop: spacing[5],
  paddingBottom: spacing[5],
  justifyContent: "flex-start",
}
const TITLE: TextStyle = { textAlign: "center" }
const TITLE_MIDDLE: ViewStyle = { flex: 1, justifyContent: "center" }
const LEFT: ViewStyle = { width: 32 }
const RIGHT: ViewStyle = { width: 32 }

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export function Header(props: HeaderProps) {
  const {
    onLeftPress,
    onRightPress,
    rightIcon,
    leftIcon,
    headerText,
    headerTx,
    style,
    titleStyle,
    rightButton,
    iconSize,
    searchBar,
    searchBarStyle,
  } = props
  const header = headerText || (headerTx && translate(headerTx)) || ""

  return (
    <View style={[ROOT, style]}>
      {leftIcon ? (
        <Button preset="link" onPress={onLeftPress}>
          <Icon icon={leftIcon} style={{ width: iconSize || 24, height: iconSize || 24 }} />
        </Button>
      ) : (
        <View style={LEFT} />
      )}
      <View style={TITLE_MIDDLE}>
        <Text style={[TITLE, titleStyle]} text={header} />
        {searchBar ? (
          <SearchBar
            style={searchBarStyle}
            placeholderTextColor={color.palette.white}
            textInputStyle={{ color: color.palette.white }}
            searchIconImageStyle={{ tintColor: color.palette.white }}
            clearIconImageStyle={{ tintColor: color.palette.white }}
            darkMode={true}
          />
        ) : null}
      </View>
      {rightIcon ? (
        <Button preset="link" onPress={onRightPress}>
          <Icon icon={rightIcon} style={{ width: iconSize || 24, height: iconSize || 24 }} />
        </Button>
      ) : searchBar ? undefined : (
        <View style={RIGHT} />
      )}
      {rightButton ? props.rightButton : searchBar ? undefined : <View style={RIGHT} />}
    </View>
  )
}
