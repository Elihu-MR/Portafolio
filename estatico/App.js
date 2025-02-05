import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

// remplaza por el link de tu imagen
  const third_image = "https://static.wikia.nocookie.net/hollowknight/images/1/13/Silksong_cover.jpg";

  //sube tu imagen a la carpeta assets y remplaza el nombre de la imagen

export default function App() {
  return (
    <View style={styles.container}>


    <Text style={styles.title}>Source: Third Image</Text>
      <Image style={styles.image} source={{ uri: third_image }} />

      <Text style={styles.title}>Source: Local Image</Text>
  
      <Image style={styles.image_pvp} source={require("./assets/pvp.png")} />


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
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image:{
    width: 150,
    height: 200,
    marginBottom: 20,
  },
  image_pvp:{
    width: 900,
    height: 100,
    marginBottom: 20,
  }

  //uri universal resource identifier
  // url universal resource locator
});
