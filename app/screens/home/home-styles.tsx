
import { Platform, StyleSheet} from 'react-native'
import { spacing, color } from '../../theme';

export const styles = StyleSheet.create({
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
    currentBalanceText: {
      color: color.palette.white,
      fontSize: 14,
      fontWeight: "400",
      marginTop: spacing[4],
    },
    header: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: Platform.OS === "ios" ? 40 : 24,
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
      fontSize: 24,
      fontWeight: "bold",
      lineHeight: 15,
      marginLeft: spacing[4],
      paddingTop: spacing[3],
      textAlign: "left",
    },
    root: {
      backgroundColor: color.palette.primaryBlueDarkest,
      flex: 1,
    },
    transactionContainer:{
      
    },
    transactionTypeButton: {
      alignItems: "center",
      borderColor: color.palette.primaryBlueLighter,
      borderRadius: 8,
      borderWidth: 1,
      height: 60,
      justifyContent: "center",
      padding: spacing[4],
      width: "48%",
    },
    transactionTypeContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: spacing[4],
      marginVertical: spacing[3],
    },
    transactionTypeText: {
      color: color.palette.primaryBlueLighter,
      fontSize: 16,
      fontWeight: "600",
    },
  });

export default styles