/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native'
import { color, spacing } from '../../theme'

export const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: color.palette.white,
      borderRadius: 10,
      justifyContent: "center",
      marginTop: spacing[5],
      padding: spacing[3],
      width: 140,
    },
    buttonText: {
      color: color.primary,
      fontSize: 16,
      fontWeight: "500",
    },
    container: {
      backgroundColor: color.primary,
      borderTopRightRadius: 70,
      height: "100%",
      marginRight: 52,
      paddingHorizontal: spacing[5],
      paddingVertical: spacing[6],
    },
    dotActive: {
      backgroundColor: color.palette.darkOrange,
      borderRadius: 8,
      height: 8,
      left: 0,
      marginRight: spacing[2],
      position: "relative",
      top: 0,
      width: 32,
    },
    dots: {
      backgroundColor: color.palette.lightOrange,
      borderRadius: 8,
      height: 8,
      left: 0,
      marginRight: spacing[2],
      position: "relative",
      top: 0,
      width: 16,
    },
    image: {
      height: "70%",
      width: "100%",
    },
    paginationContainer: {
      flexDirection: "row",
      marginBottom: spacing[3],
    },
    slide: {
      backgroundColor: "#0E164D",
      flex: 1,
      paddingBottom: 32,
    },
    text: {
      color: "rgba(255, 255, 255, 0.8)",
      fontSize: 16,
      fontWeight: "500",
      lineHeight: spacing[5],
      marginTop: spacing[2],
    },
    title: {
      color: "white",
      fontSize: 24,
      fontWeight: "800",
    },
  })

  export default styles