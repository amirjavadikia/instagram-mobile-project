import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";


const Stories = () => {
    return (

    <View style={styles.container}>
         <View style={styles.imageparent}>
    
       <Image
       style={styles.image}
       source={require('../asset/test.jpg')}
       />
       <Text>your story</Text>
    </View>
         <View style={styles.imageparent}>
    
       <Image
       style={styles.image}
       source={require('../asset/test.jpg')}
       <Tes
       />

    </View>
         <View style={styles.imageparent}>
    
       <Image
       style={styles.image}
       source={require('../asset/test.jpg')}
       />

       <Text style={styles.text}>your story</Text>

    </View>
         <View style={styles.imageparent}>
    
       <Image
       style={styles.image}
       source={require('../asset/test.jpg')}
       />
       <Text></Text>
    </View>
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
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    image : {
        borderRadius:50,
        width:70,
        height:70,  
    },
    text: {
        fontSize:10,
        textAlign:'center'
    }
})

export default Stories;