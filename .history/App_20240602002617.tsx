import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";
import Header from "./components/Header";
import Stories from "./components/Stories"
import Posts from "./components/Posts";


const  MainPage = () =>{
  return (
    
      <Scr contentContainerStyle={styles.scrollViewContent}>


    <Header />
     <Stories  />
     <Posts />
    </Scr>
  )
}




export default MainPage;