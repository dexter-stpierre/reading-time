import { TextInput as RNPTextInput, TextInputProps } from 'react-native-paper'

export const TextInput = (props: TextInputProps) => {
  return (
    <RNPTextInput mode='outlined' {...props} />
  )
}

export { TextInputProps }
