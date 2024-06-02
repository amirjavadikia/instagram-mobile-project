import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

 


const Posts = () => {
return (
    <View>


<View style={styles.top}>
    <View style={styles.leftTop}>  
        <Image 
        style={styles.profilePost}
        source={require('../asset/test.jpg')}
                />

                <Text>KHATOON__X</Text>
    </View>
    <View>
        <Text>. . .</Text>
    </View>
    
</View>


<View style={styles.postImgParent}>
    <Image 
    style = {styles.postImg}
    source={require('../asset/post.jpg')}
    />
</View>
<View>
    
<Image
style={styles.likeOfPost}
source={require('../asset/test.jpg')}

/>

        


</View>


    </View>
)

   
     

   
}


const styles = StyleSheet.create ({
    profilePost: {
        width:30,
        height:30,
        borderRadius:50
    },
    top :{
        display:'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
    },
    leftTop :{
        display:'flex',
        flexDirection: 'row',
        alignItems: "center"
    },
    postImgParent:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    postImg :{
       width:"100%",
       height:"70%",
       

    },
    likeOfPost:{

    }
})
export default Posts;