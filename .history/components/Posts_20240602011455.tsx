import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Share } from "react-native";

 


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
source={require('../asset/like.png')}

/>
  <Image
  style={styles.direct}
  source={require('../asset/direct.png')}
  />      


</View>

<View>
    <
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
       width:500,
       height:250,
       

    },
    likeOfPost:{
        width: 30,
        height: 30
    },
    
    direct:{
    width: 30,
    height: 30
    },
})
export default Posts;