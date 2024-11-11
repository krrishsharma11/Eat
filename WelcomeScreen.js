import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/newbackground.jpeg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.topText}>25K+ RECIPES</Text>
          <Text style={styles.midText}>It's</Text>
          <Text style={styles.largeText}>Cooking</Text>
          <Text style={styles.midText}>Time</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RecipeList')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 20,
  },
  textContainer: {
    marginBottom: 40,
  },
  topText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingBottom:8
  },
  midText: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
  },
  largeText: {
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
