import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";

const  MainPage = () =>{
  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={require('./asset/logo.png')}
      />

      <View style={styles.rightHeader}>
      <Image 
        style={styles.like}
        source={require('./asset/like.png')}
      />
      <Image 
        style={styles.direct}
        source={require('./asset/direct.png')}
      />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({

  container:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightHeader:{
    display: 'flex',
    flexDirection: 'row',

  },
  logo: {
      width: "40%",
      height: "40%",
      padding : 20
  },
  like: {
    width: "5%",
    height: "5%",
    padding : 20
},
direct: {
  width: "5%",
  height: "5%",
  padding : 20
}
})

export default MainPage;