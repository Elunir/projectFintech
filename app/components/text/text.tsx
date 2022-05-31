import * as React from "react"
import { Text as ReactNativeText } from "react-native"
import { presets } from "./text.presets"
import { TextProps } from "./text.props"
import { translate } from "../../i18n"

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Text(props: TextProps) {
  // grab the props
  const { preset = "default", tx, txOptions, text, children, fontType, style: styleOverride, ...rest } = props

  // figure out which content to use
  const i18nText = tx && translate(tx, txOptions)
  const content = i18nText || text || children

  const setFontType = (fontType: string) => {
    switch (fontType) {
      case 'bold': return 'Inter-Bold'
      case 'medium': return 'Inter-Medium'
      case 'light': return 'Inter-Light'
      case 'SemiBold': return 'Inter-SemiBold'
      default: return 'Inter-Regular'
    }
  }

  const style = presets[preset] || presets.default
  const font = setFontType(props.fontType?props.fontType:'normal')
  const styles = [style, styleOverride]

  return (
    <ReactNativeText {...rest} style={[styles, { fontFamily: font }]}>
      {content}
    </ReactNativeText>
  )
}
