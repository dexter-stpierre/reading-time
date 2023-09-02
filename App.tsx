import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from './components/Button'
import { Link, NativeRouter, Route, Routes } from 'react-router-native'
import { List } from './pages/List'
import { Book } from './pages/Book'
import React from 'react'

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Routes>
          <Route path='/' element={<Text>Hello World</Text>} />
          <Route path='/list' element={<List />} />
          <Route path='/book' element={<Book />} />
        </Routes>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>This is something I wrote</Text>
        <Button onPress={() => alert('button has been pressed')}>
          <Text>Add a new book</Text>
        </Button>
        <Navigation />
        <StatusBar style='auto' />
      </View>
    </NativeRouter>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const Navigation = () => {
  return (
    <View>
      <Link to='/list'>
        <Text>Go to List</Text>
      </Link>
      <Link to='/book'>
        <Text>Go to Book</Text>
      </Link>
    </View>
  )
}
