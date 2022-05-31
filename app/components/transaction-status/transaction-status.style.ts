import { StyleSheet } from "react-native"
import { color, spacing } from "../../theme"

const styling = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: color.error,
    borderRadius: 50,
    justifyContent: "center",
    marginTop: spacing[3],
    padding: spacing[2],
  },
  status:{
    color: color.palette.white,
    fontSize: 16,
    fontWeight: "600"
  }
})

export default styling
