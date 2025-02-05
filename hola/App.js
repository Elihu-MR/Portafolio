import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyForms from './components/MyForms';


export default function App() {
  return (
    <View style={styles.container}>
      <MyForms />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
  }

  //investigar como implementar recursos estaticos en la app

});
