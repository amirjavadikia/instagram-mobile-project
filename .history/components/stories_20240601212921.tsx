import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";


const Stories = () => {
    return (

    <View>
         <View>
       <Image
       style={styles.image}
       source={require('../asset/test.jpg')}
       />

    </View>
    
    
    
    </View>
    )
}

const styles = StyleSheet.create({
    image : {
        width:"30%",
        height:"30%",
    }
})

export default Stories;