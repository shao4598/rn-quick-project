import {useState} from 'react';
import { StyleSheet, ImageBackground, View, Button,Text } from 'react-native';
import Comp from './src/Comp';

const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

export default function App() {

  return (

    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Comp html={<Text style={styles.text}>1234abcd</Text>} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  }
});
