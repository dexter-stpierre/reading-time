import { StatusBar } from 'expo-status-bar'
import { Appearance, StyleSheet, View } from 'react-native'
import {
  Link,
  NativeRouter,
  Route,
  Routes,
  useLocation,
} from 'react-router-native'
import { List } from './pages/List'
import { Book } from './pages/Book'
import React, { PropsWithChildren, useMemo } from 'react'
import { NewBook } from './pages/NewBook'
import { PaperProvider, MD3DarkTheme, MD3LightTheme } from 'react-native-paper'
import { Text } from 'react-native-paper'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useStyles } from './hooks/useStyles'
import {
  BottomNavigation,
  BottomNavigationProps,
} from './components/BottomNavigation'

export default function App() {
  const colorScheme = Appearance.getColorScheme()
  const theme = colorScheme === 'light' ? MD3LightTheme : MD3DarkTheme

  return (
    <SafeAreaProvider style={styles.safeArea}>
      <NativeRouter>
        <PaperProvider theme={theme}>
          <StatusBar style='auto' />
          <AppWrapper>
            <Routes>
              <Route path='/' element={<Text>Hello World</Text>} />
              <Route path='/list' element={<List />} />
              <Route path='/book' element={<Book />} />
              <Route path='/new-book' element={<NewBook />} />
            </Routes>
          </AppWrapper>
          <Navigation />
        </PaperProvider>
      </NativeRouter>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    // height: '100%',
  },
  safeArea: {
    backgroundColor: 'black',
  },
})

const AppWrapper = ({ children }: PropsWithChildren) => {
  const styles = useStyles((theme) => ({
    container: {
      width: '100%',
      backgroundColor: theme.colors.surface,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  }))

  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>
}

const routes: BottomNavigationProps['navigationState']['routes'] = [
  {
    key: '/list',
    title: 'List',
    focusedIcon: 'view-list',
    unfocusedIcon: 'view-list-outline',
  },
  {
    key: '/new-book',
    title: 'Add',
    focusedIcon: 'plus-circle',
    unfocusedIcon: 'plus-circle-outline',
  },
]

const Navigation = () => {
  const location = useLocation()

  const index = useMemo(() => {
    return routes.findIndex((route) => route.key === location.pathname)
  }, [location.pathname])

  const handleTabPress: BottomNavigationProps['onTabPress'] = ({
    preventDefault,
  }) => {
    preventDefault()
  }

  return (
    <View style={navigationStyles.container}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onTabPress={handleTabPress}
        renderTouchable={(route) => (
          <Link {...route} style={route.style} to={route.key}>
            {route.children}
          </Link>
        )}
      />
    </View>
  )
}

const navigationStyles = StyleSheet.create({
  container: {
    width: '100%',
  },
})
