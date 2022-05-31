import { StyleSheet } from "react-native"
import { color, spacing } from "../../theme"

export const styling = StyleSheet.create({
  container: {
      alignItems:'center',
      backgroundColor: color.palette.primaryBlueDark,
      flexDirection: 'row',
      justifyContent: "flex-start",
      padding: spacing[4]
  },
  nameOfUser:{
    color: color.palette.primaryBlueLightText,
    fontSize: 16,
    fontWeight: "900",
  },
  profileImage: {
    borderRadius: 50,
    height: 52,
    marginRight: spacing[3],
    width: 52
  }
})

export default styling
