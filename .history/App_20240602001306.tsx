import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";
import Header from "./components/Header";
import Stories from "./components/Stories"
import Posts from "./components/Posts";


const  MainPage = () =>{
  return (
    <View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>


    <Header />
     <Stories  />
     <Posts />
    </View>
  )
}




export default MainPage;