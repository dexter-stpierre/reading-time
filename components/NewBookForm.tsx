import { useState } from 'react'
import { View } from 'react-native'
import { TextInput } from './TextInput'
import { useStyles } from '../hooks/useStyles'

export const NewBookForm = () => {
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [pages, setPages] = useState('')

  const styles = useStyles((theme) => ({
    view: {
      width: '100%',
      padding: 16,
    },
  }))

  return (
    <View style={styles.view}>
      <TextInput
        label='Author'
        onChangeText={setAuthor}
        value={author}
      />
      <TextInput label='Title' onChangeText={setTitle} value={title} />
      <TextInput
        keyboardType='number-pad'
        label='Pages'
        onChangeText={setPages}asdf
        value={pages}
      />
    </View>
  )
}
