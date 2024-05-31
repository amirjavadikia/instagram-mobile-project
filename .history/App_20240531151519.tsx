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
        style={styles.direct}
        source={require('./asset/direct.png')}
      />


<Image 
        style={styles.like}
        source={require('./asset/like.png')}
      />
    </View>
  )
}


const styles = StyleSheet.create({

  container:{
    
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