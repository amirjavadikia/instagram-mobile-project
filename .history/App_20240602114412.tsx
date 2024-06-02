import React from "react";
import {View, StyleSheet, Text, Image, ScrollView} from "react-native";
import Header from "./components/Header";
import Stories from "./components/Stories"
import Posts from "./components/Posts";


const  MainPage = () =>{


  
  return (
    
     <ScrollView>
    <Header />
     <Stories  />
     <Posts />
     </ScrollView>
  )
}

const styles = StyleSheet.create({

})


export default MainPage;