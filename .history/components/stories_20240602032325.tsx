import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";


const Stories = () => {
    return (

    <View style={styles.container}>
         <View style={styles.imageparent}>
    
       <Image
       style={styles.image}
       source={require('../asset/a.jpeg')}
       />
       <Text style={styles.text}>your story</Text>
    </View>
         <View style={styles.imageparent}>
    
       <Image
       style={styles.image}
       source={require('../asset/k.jpeg')}
       />
       <Text style={styles.text}>kimkim</Text>
    </View>
         <View style={styles.imageparent}>
    
       <Image
       style={styles.image}
       source={require('../asset/kh.jpeg')}
       />

       <Text style={styles.text}>khatoon.va</Text>

    </View>
         <View style={styles.imageparent}>
    
       <Image
       style={styles.image}
       source={require('../asset/x.png')}
       />
       <Text style={styles.text}>saraaa</Text>
    </View>
         <View style={styles.imageparent}>
    
       <Image
       style={styles.image}
       source={require('../asset/test.jpg')}
       />
       <Text style={styles.text}>Reza.qp</Text>
    </View>
    
    
    
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        margin:10
    },
    image : {
        borderRadius:50,
        width:70,
        height:70,  
        borderWidth:3,
        borderColor:'green'
    },
    text: {
        fontSize:10,
        textAlign:'center'
    }
})

export default Stories;