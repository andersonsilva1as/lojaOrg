import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import HomeScreen from "./src/screens/Home";

export default function App(){
  return(
    <SafeAreaView style = {styles.container}>
      <HomeScreen/>
    </SafeAreaView>
  )
}

styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})