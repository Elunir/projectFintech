import { StyleSheet } from "react-native"
import { color, spacing } from "../../theme"

export const styles = StyleSheet.create({
  bottomSheetContainer: {
    flex: 1,
  },
  bottomSheetHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacing[4],
    width: "100%",
  },
  bottomSheetHeaderSort: {
    alignItems: "center",
    flexDirection: "row",
  },
  bottomSheetHeaderSortBy: {
    color: color.palette.primaryBlueLightest,
    fontSize: 14,
    fontWeight: "500",
    marginRight: spacing[2],
  },
  bottomSheetHeaderSortTitle: {
    color: color.palette.white,
    fontSize: 14,
    fontWeight: "500",
    marginRight: spacing[1],
  },
  bottomSheetHeaderTitle: {
    color: color.palette.white,
    fontSize: 16,
    fontWeight: "600",
  },
  childrenContainer:{
    marginTop: spacing[4],
  },
  handleIndicator: {
    backgroundColor: color.palette.primaryBlueLightest,
    borderRadius: 10,
    height: 8,
    marginVertical: spacing[2],
    width: 64,
  }
})

export default styles
