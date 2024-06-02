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

                <Text style={styles.profileId}>KHATOON__X</Text>
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
</View >


<View style={styles.postSave}>
<View style={styles.postOperation}>
    

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
    <Image
    style={styles.saveIcon}
    source={require('../asset/saveIcon.png')}
    
    />
</View>
</View>

<View>
    <Text style={styles.likesCount}>89 Likes</Text>
</View> 
<View style={styles.parent}>
<View>

    <Text style={styles.id}>KHATOON__X </Text>
</View>

    <View style={styles.caption}>

<Text>یه روز خوب...</Text>
    </View>


</View>
<View>

    <Text style={styles.translate}>see translate</Text>
</View>

<View>
    <Text style={styles.comment}>view all 200 comments</Text>
</View>


    </View>
)

}


const styles = StyleSheet.create ({
    profilePost: {
        width:30,
        height:30,
        borderRadius:50,
        margin:10
    },
    profileId:{
        fontSize:10
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
    height: 30,
    
    },

    saveIcon:{

        width:30,
        height:30
    },
    postOperation:{
        display: 'flex',
        flexDirection: 'row',
        marginLeft:5,
        marginTop:5,
    },
    postSave:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:"space-between"
    },

    comment:{
        fontSize:12
    },

    likesCount:{
        
        marginLeft:5

    },
    caption:{

        marginLeft:5
    },

    translate:{
        marginLeft:5

    }, 


    id:{

        marginLeft:5
    },


    parent:{
     
    display:'flex',
    flexDirection:'row',
    },


})
export default Posts;