import { useState } from 'react'
import { TextInput, View } from 'react-native'

export const NewBookForm = () => {
  const [author, setAuthor] = useState('')

  return (
    <View>
      <TextInput
        style={{ height: 40 }}
        placeholder='Author'
        onChangeText={(newAuthor) => setAuthor(newAuthor)}
        defaultValue={author}
      />
    </View>
  )
}
