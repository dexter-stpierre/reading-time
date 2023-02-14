import { PropsWithChildren } from 'react';
import { StyleSheet, Text, Pressable, View, PressableProps } from 'react-native';

type ButtonProps = Pick<PressableProps, 'onPress'> & PropsWithChildren<{ }>

export function Button({ onPress, children }: ButtonProps) {
  return (
    <View>
      <Pressable style={styles.button} onPress={onPress}>
        <Text>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10
  },
});