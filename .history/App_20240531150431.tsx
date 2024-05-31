import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";

const  MainPage = () =>{
  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={require('./asset/logo.png')}
      />

<Image 
        style={styles.logo}
        source={require('./asset/direct.png')}
      />


<Image 
        style={styles.logo}
        source={require('./asset/like.png')}
      />
    </View>
  )
}


const styles = StyleSheet.create({

  container:{
    padding: "10px "
  },
  logo: {
      width: "40%",
      height: "40%",
  }
})

export default MainPage;