import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";

const  MainPage = () =>{
  return (
    <View style={styles.container}>
 
    </View>
  )
}


const styles = StyleSheet.create({

  container:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10, 
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