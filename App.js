import React from "react";
import { View, StyleSheet, } from 'react-native';
import Card from "./src/components/GameGrubCard";
import foods from './assets/data/foods';

const App = () => {
  return (
    <View style={styles.pageContainer}>
      <Card food={foods[3]}/>
    </View>

  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },


})
export default App;