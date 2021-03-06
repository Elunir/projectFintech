import { StyleSheet } from "react-native"
import { color, spacing } from "../../theme"

export const styling = StyleSheet.create({
  container: {
    backgroundColor: color.palette.primaryBlueDark,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: spacing[4],
  },
  currencyContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  currencyIcon: {
    // color: color.palette.white,
    height: 12,
    marginRight: spacing[1],
    width: 12,
  },
  currentBalance: {
    color: color.palette.white,
    fontSize: 16,
    fontWeight: "700",
  },
  nameOfUser: {
    color: color.palette.primaryBlueLightText,
    fontSize: 16,
    fontWeight: "900",
  },
  profileImage: {
    borderRadius: 50,
    height: 52,
    marginRight: spacing[3],
    width: 52,
  },
  userImage: {
    alignItems: "center",
    flexDirection: "row",
  },
  userInfo: {
    alignItems: "flex-start",
    flexDirection: "column",
  },
})

export default styling
