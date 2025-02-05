import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Button, TextInput } from 'react-native-paper';

export default function App() {

    const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      
      {/* Appbar component paper */}
      <Appbar>
        <Appbar.Content title="React Native Paper" />
      </Appbar>

      {/* TextInput component paper */}
      <TextInput style={styles.input}
      label='Type something'
      value={text}
      onChangeText={text => setText(text)}
      textColor='blue'>
      </TextInput>

      {/* Button component paper */}
      <Button mode='contained' onPress={() => alert(`Texto Ingresado: ${text}`)}>
        Click me
      </Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 16,
  }

});
