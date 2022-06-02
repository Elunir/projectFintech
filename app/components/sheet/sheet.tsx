import * as React from "react"
import { View } from "react-native"
import { observer } from "mobx-react-lite"
import { color } from "../../theme"
import BottomSheet from "@gorhom/bottom-sheet"
import styles from "./sheet-style"

export interface SheetProps {
  /**
   * An optional style override useful for padding & margin.
   */
  children: React.ReactNode
  /**
   * Add snap points to the bottom sheet.
   */
  snap?: string[] 
}

/**
 * Describe your component here
 */
export const Sheet = observer(function Sheet(props: SheetProps) {
  const { children, snap } = props

  const bottomSheetRef = React.useRef<BottomSheet>(null)
  const snapPoints = React.useMemo(() => snap || ["56%","90%"], [])
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
        <View style={styles.childrenContainer}>{children}</View>
      </View>
    </BottomSheet>
  )
})
