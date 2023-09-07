import { ComponentProps } from 'react'
import {
  BottomNavigation as RNPBottomNavigation,
  BottomNavigationProps as RNPBottomNavigationProps,
} from 'react-native-paper'

export interface BottomNavigationProps
  extends ComponentProps<typeof RNPBottomNavigation.Bar> {
  onTabPress: RNPBottomNavigationProps<any>['onTabPress']
}

export const BottomNavigation = (props: BottomNavigationProps) => {
  return <RNPBottomNavigation.Bar {...props} />
}
