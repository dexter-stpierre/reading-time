import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Button } from './components/Button'
import {
  Link,
  NativeRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-native'
import { List } from './pages/List'
import { Book } from './pages/Book'
import React, { PropsWithChildren, useMemo } from 'react'
import { NewBook } from './pages/NewBook'
import { PaperProvider, MD3DarkTheme } from 'react-native-paper'
import {
  BottomNavigation,
  Text,
  BottomNavigationProps,
} from 'react-native-paper'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useStyles } from './hooks/useStyles'

export default function App() {
  return (
    <SafeAreaProvider style={styles.safeArea}>
      <NativeRouter>
        <PaperProvider theme={MD3DarkTheme}>
          <StatusBar style='auto' />
          <AppWrapper>
            <View>
              <Routes>
                <Route path='/' element={<Text>Hello World</Text>} />
                <Route path='/list' element={<List />} />
                <Route path='/book' element={<Book />} />
                <Route path='/new-book' element={<NewBook />} />
              </Routes>
              <Text>Open up App.js to start working on your app!</Text>
              <Text>This is something I wrote</Text>
            </View>
            <Navigation />
          </AppWrapper>
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
      backgroundColor: theme.colors.surface,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  }))

  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>
}

const routes: BottomNavigationProps<any>['navigationState']['routes'] = [
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
  const navigate = useNavigate()
  const location = useLocation()

  const index = useMemo(() => {
    return routes.findIndex((route) => route.key === location.pathname)
  }, [location.pathname])

  const handleTabPress: BottomNavigationProps<any>['onTabPress'] = ({
    route,
    preventDefault,
  }) => {
    preventDefault()
    navigate(route.key)
  }

  return (
    <View style={navigationStyles.container}>
      <BottomNavigation.Bar
        navigationState={{ index, routes }}
        onTabPress={handleTabPress}
      />
    </View>
  )
}

const navigationStyles = StyleSheet.create({
  container: {
    width: '100%',
  },
})
