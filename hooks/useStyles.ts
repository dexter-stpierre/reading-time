import { MD3Theme, useTheme } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import { useMemo } from 'react'
import { useAutoUpdatingRef } from './useAutoUpdatingRef'

type NamedStyles<T> = StyleSheet.NamedStyles<T>

export const useStyles = <T extends NamedStyles<T> | NamedStyles<any>>(creatorFunction: (theme: MD3Theme) => T): T => {
  const theme = useTheme()
  const creatorFunctionRef = useAutoUpdatingRef(creatorFunction)

  return useMemo(() => {
    const styleSheet = creatorFunctionRef.current(theme)
    return StyleSheet.create(styleSheet)
  }, [creatorFunctionRef, theme])
}