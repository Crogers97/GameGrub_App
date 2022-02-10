import React from "react";
import { Text, Image, View, StyleSheet, ImageBackground } from 'react-native';

const App = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.card}>
        <ImageBackground
          source={{
            uri: 'https://www.japan.go.jp/kizuna/_src/7989285/sushi_robots_01.jpg?v=1643014433922'
          }}
          style={styles.image}>
          <View style={styles.cardInner}>
            <Text style={styles.name}>Sushi</Text>
            <Text style={styles.bio} >Sushi is a traditional Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanied by a variety of ingredients, such as seafood, often raw, and vegetables.</Text>
          </View>
        </ImageBackground>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  card: {
    width: '95%',
    height: '70%',
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,


  },
  image:
  {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',

    justifyContent: 'flex-end',

  },
  cardInner: {
    padding:10,
    
  },


  name: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    
  },
  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 25,
  }

})
export default App;