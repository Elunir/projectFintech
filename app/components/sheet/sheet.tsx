import * as React from "react"
import { TouchableOpacity, View } from "react-native"
import { observer } from "mobx-react-lite"
import { color } from "../../theme"
import { Text } from "../text/text"
import { Ionicons } from "@expo/vector-icons"
import BottomSheet from "@gorhom/bottom-sheet"
import styles from "./sheet-style"

export interface SheetProps {
  /**
   * An optional style override useful for padding & margin.
   */
  children: React.ReactNode
}

/**
 * Describe your component here
 */
export const Sheet = observer(function Sheet(props: SheetProps) {
  const { children } = props

  const bottomSheetRef = React.useRef<BottomSheet>(null)
  const snapPoints = React.useMemo(() => ["56%", "90%"], [])
  const handleSheetChanges = React.useCallback((index: number) => {
    console.log("handleSheetChanges", index)
  }, [])

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backgroundStyle={{ backgroundColor: color.palette.primaryBlueDarker }}
      handleIndicatorStyle={styles.handleIndicator}
    >
      <View style={styles.bottomSheetContainer}>
        <View style={styles.bottomSheetHeader}>
          <Text style={styles.bottomSheetHeaderTitle}>All Transactions</Text>
          <View style={styles.bottomSheetHeaderSort}>
            <Text style={styles.bottomSheetHeaderSortBy}>Sort by:</Text>
            <TouchableOpacity style={styles.bottomSheetHeaderSort}>
              <Text style={styles.bottomSheetHeaderSortTitle}>Recents</Text>
              <Ionicons name="chevron-down" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.childrenContainer}>{children}</View>
      </View>
    </BottomSheet>
  )
})
