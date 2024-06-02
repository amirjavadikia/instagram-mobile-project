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

    </View>
    
    
    
    </View>
    )
}

const styles = StyleSheet.create({
    imageparent: {
        
    },
    image : {
        borderRadius:100,
        width:"10%",
        height:"50%",  
    }
})

export default Stories;