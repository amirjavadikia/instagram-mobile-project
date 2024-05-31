import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";

const  MainPage = () =>{
  return (
    <View>
      <Image 
        style={styles.logo}
        source={require('./asset/logo.png')}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  logo: {
      width: "40%",
      height: "20%",
  }
})

export default MainPage;