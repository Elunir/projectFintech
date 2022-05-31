import * as Font from "expo-font"

export const initFonts = async () => {
  // Refer to ./assets/fonts/custom-fonts.md for instructions.
  // ...
  // Welcome back! Just uncomment this and replace/append with your font file names!
  // ⬇
  await Font.loadAsync({
    InterRegular: require("./static/Inter-Regular.ttf"),
    InterBold: require("./static/Inter-Bold.ttf"),
    InterBlack: require("./static/Inter-Black.ttf"),
    InterExtraBold: require("./static/Inter-ExtraBold.ttf"),
    InterExtraLight: require("./static/Inter-ExtraLight.ttf"),
    InterLight: require("./static/Inter-Light.ttf"),
    InterMedium: require("./static/Inter-Medium.ttf"),
    InterSemiBold: require("./static/Inter-SemiBold.ttf"),
    InterThin: require("./static/Inter-Thin.ttf"),
  })
}
