import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

 


const Posts = () => {
return (
    <View>


<View>
    <View>  
        <Image 
        style={styles.profilePost}
        source={require('../asset/post.jpg')}
                />
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
        width:50,
        height:50,
        borderRadius
    }
})
export default Posts;