import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";

const  MainPage = () =>{
  return (
    <View>
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={require('./asset/logo.png')}
      />
      </View>

    <View style={styles.directParent}>
    <Image 
        style={styles.direct}
        source={require('./asset/direct.png')}
      />
    </View>

    <View style={styles.likeParent}>
<Image 
        style={styles.like}
        source={require('./asset/like.png')}
      />
      </View>
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


directParent:{
   height: "60%",
   width: "120%"
},
direct: {
  width: "5%",
  height: "5%",
  padding : 20
},
likeParent :{
  height: "60%",
   width: "120%"
},
like: {
  width: "40%",
  height: "40%",
  padding : 20
},
})

export default MainPage;