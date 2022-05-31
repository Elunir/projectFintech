import { StyleSheet } from "react-native"
import { color, spacing } from "../../theme"

const styling = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: spacing[3],
    padding: spacing[3],
  },
  status: {
    color: color.palette.white,
    fontSize: 14,
    fontWeight: "500",
  },
  statusIcon: {
    height: 16,
    marginRight: spacing[1],
    width: 16,
  },
})

export default styling
