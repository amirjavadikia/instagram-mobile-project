import React from "react";
import {View, StyleSheet, Text, Image, ScrollView} from "react-native";
import Header from "./components/Header";
import Stories from "./components/Stories"
import Posts from "./components/Posts";


const  MainPage = () =>{
  return (
    
      //  <ScrollView>

<View>
    <Header />
     <Stories  />
     <Posts />
     </View>
  )
}

const styles = StyleSheet.create({
  scrollViewContent: {

  }
})


export default MainPage;