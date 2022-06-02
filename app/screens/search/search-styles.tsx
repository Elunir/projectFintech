/* eslint-disable react-native/no-color-literals */
import { Platform, StyleSheet } from "react-native"
import { spacing, color } from "../../theme"

export const styles = StyleSheet.create({
  buttonContinue: {
    alignItems: "center",
    backgroundColor: color.palette.pink,
    borderRadius: 10,
    justifyContent: "center",
    marginVertical: spacing[4],
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[5],
  },
  buttonContinueText: {
    color: color.palette.white,
    fontSize: 16,
    fontWeight: "600",
  },
  container: {
    alignItems: "center",
    flex: 1,
  },
  containerCenter: {
    alignItems: "center",
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
    height: "50%",
    position: "absolute",
    top: 120,
    width: "100%",
    zIndex: -1,
  },
  profileImage: {
    borderRadius: 100,
    height: 100,
    width: 100,
  },
  root: {
    backgroundColor: color.palette.primaryBlueDarkest,
    flex: 1,
  },
  searchBar: {
    backgroundColor: color.palette.primaryBlueDark,
    borderColor: color.palette.received,
    borderWidth: 1,
    marginBottom: spacing[3],
    shadowOpacity: 0,
  },
  userImage: {
    borderRadius: 100,
    height: 66,
    width: 66,
  },
  userImageBorder: {
    alignItems: "center",
    backgroundColor: color.palette.white,
    borderRadius: 100,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
  userName: {
    color: color.palette.white,
    fontSize: 22,
    fontWeight: "600",
    padding: spacing[3],
  },
  userNameProfile: {
    color: color.palette.white,
    fontSize: 14,
    fontWeight: "600",
    padding: spacing[3],
  },
  userPhone: {
    color: color.palette.white,
    fontSize: 14,
    fontWeight: "400",
    padding: spacing[2],
  },
})

export default styles
