import React from "react";
import {View, StyleSheet, Text, Image, ScrollView} from "react-native";
import Header from "./components/Header";
import Stories from "./components/Stories"
import Posts from "./components/Posts";


const  MainPage = () =>{

  const postsData = [
    {
      id: 1,
      profileImage: require('./asset/kh.jpeg'),
      profileName: 'KHATOON__X',
      postImage: require('./asset/post.jpg'),
      likes: 89,
      caption: 'یه روز خوب...',
      commentsCount: 200
    },
    {
      id: 2,
      profileImage: require('../asset/test.jpg'),
      profileName: 'kamand.qp',
      postImage: require('./asset/ship.jpg'),
      likes: 89,
      caption: 'یه شب خوب...',
      commentsCount: 200
    }
  ];

  return (
    
     <ScrollView>
    <Header />
     <Stories  />
     <Posts posts={postsData}/>
     </ScrollView>
  )
}

const styles = StyleSheet.create({

})


export default MainPage;