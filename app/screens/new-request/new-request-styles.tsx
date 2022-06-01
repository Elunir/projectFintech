import { Platform, StyleSheet } from "react-native"
import { spacing, color } from "../../theme"

export const styles = StyleSheet.create({
  buttonDontSend: {
    alignItems: "center",
    borderColor: color.palette.primaryBlueLighter,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[4],
  },
  buttonDontSendText: {
    color: color.palette.primaryBlueLighter,
    fontSize: 16,
    fontWeight: "600"
  },
  buttonSendMoney: {
    alignItems: "center",
    backgroundColor: color.palette.pink,
    borderRadius: 10,
    justifyContent: "center",
    marginVertical: spacing[4],
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[4],
  },
  buttonSendMoneyText: {
    color: color.palette.white,
    fontSize: 16,
    fontWeight: "600"
  },
  container: {
    alignItems: "center",
    flex: 1,
  },
  currencyContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: spacing[5],
  },
  currencyIcon: {
    height: 32,
    marginRight: spacing[2],
    width: 32,
  },
  currentBalance: {
    color: color.palette.white,
    fontSize: 40,
    fontWeight: "700",
  },
  currentBalanceContainer: {
    flexDirection: "column",
    marginHorizontal: spacing[4],
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? 24 : 24,
  },
  headerButton: {
    backgroundColor: color.palette.primaryBlueDark,
    borderRadius: 8,
    padding: spacing[2],
  },
  headerButtonTitle: {
    color: color.palette.primaryBlueLight,
    fontSize: 15,
    fontWeight: "700",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 15,
    paddingTop: spacing[2],
    textAlign: "center",
  },
  image: {
    height: "40%",
    position: "absolute",
    width: "100%",
    zIndex: -1,
  },
  profileImage: {
    borderRadius: 100,
    height: 100,
    width: 100,
  },
  profileImageBorderOne: {
    alignItems: "center",
    backgroundColor: color.palette.primaryBlue1,
    borderRadius: 100,
    height: 180,
    justifyContent: "center",
    marginTop: spacing[8],
    width: 180,
  },
  profileImageBorderTwo: {
    alignItems: "center",
    backgroundColor: color.palette.primaryBlue2,
    borderRadius: 100,
    height: 140,
    justifyContent: "center",
    width: 140,
  },
  root: {
    backgroundColor: color.palette.primaryBlueDarkest,
    flex: 1,
  },
  text: {
    color: color.palette.white,
    fontSize: 14,
    fontWeight: "500",
    marginTop: spacing[6],
  },
  userName: {
    color: color.palette.white,
    fontSize: 24,
    fontWeight: "600",
    marginTop: spacing[5],
  },
})

export default styles
