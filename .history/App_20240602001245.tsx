import React from "react";
import {View, StyleSheet, Text, Image, ScrollView} from "react-native";
import Header from "./components/Header";
import Stories from "./components/Stories"
import Posts from "./components/Posts";


const  MainPage = () =>{
  return (
    
      <Scro contentContainerStyle={styles.scrollViewContent}></Scro


    <Header />
     <Stories  />
     <Posts />
    </ScrollView>
  )
}




export default MainPage;