import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

 


const Posts = () => {
return (
    <View>


<View>
    <View>  
        <Image 
        style={styles.profilePost}
        source={require('../asset/test.jpg')}
                />

                <Text>KHATOON__</Text>
    </View>
    <View></View>
</View>
<View></View>
<View></View>


    </View>
)

   
     

   
}


const styles = StyleSheet.create ({
    profilePost: {
        width:30,
        height:30,
        borderRadius:50
    }
})
export default Posts;