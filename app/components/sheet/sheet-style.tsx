import { StyleSheet } from "react-native"
import { color, spacing } from "../../theme"

export const styles = StyleSheet.create({
  bottomSheetContainer: {
    flex: 1,
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
