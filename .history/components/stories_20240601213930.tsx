import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";


const Stories = () => {
    return (

    <View>
         <View style={styles.imageparent}>
    
       <Image
       style={styles.image}
       source={require('../asset/test.jpg')}
       />
         <View style={styles.imageparent}>
    
       <Image
       style={styles.image}
       source={require('../asset/test.jpg')}
       />
         <View style={styles.imageparent}>
    
       <Image
       style={styles.image}
       source={require('../asset/test.jpg')}
       />
         <View style={styles.imageparent}>
    
       <Image
       style={styles.image}
       source={require('../asset/test.jpg')}
       />
         <View style={styles.imageparent}>
    
       <Image
       style={styles.image}
       source={require('../asset/test.jpg')}
       />

    </View>
    
    
    
    </View>
    )
}

const styles = StyleSheet.create({
    imageparent: {
        
    },
    image : {
        borderRadius:50,
        width:70,
        height:70,  
    }
})

export default Stories;