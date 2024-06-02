import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <View key={post.id} style={styles.container}>
          <View style={styles.top}>
            <View style={styles.leftTop}>
              <Image style={styles.profilePost} source={post.profileImage} />
              <Text style={styles.profileId}>{post.profileName}</Text>
            </View>
            <View>
              <Text>. . .</Text>
            </View>
          </View>

          <View style={styles.postImgParent}>
            <Image style={styles.postImg} source={post.postImage} />
          </View>

          <View style={styles.postSave}>
            <View style={styles.postOperation}>
              <Image style={styles.likeOfPost} source={require('../asset/like.png')} />
              <Image style={styles.direct} source={require('../asset/direct.png')} />
            </View>
            <View>
              <Image style={styles.saveIcon} source={require('../asset/saveIcon.png')} />
            </View>
          </View>

          <View>
            <Text style={styles.likesCount}>{post.likes} Likes</Text>
          </View>
          <View style={styles.parent}>
            <Text style={styles.id}>{post.profileName}</Text>
            <Text style={styles.caption}>{post.caption}</Text>
          </View>
          <Text style={styles.translate}>see translate</Text>
          <Text style={styles.comment}>view all {post.commentsCount} comments</Text>
          <TextInput
                style={styles.input}
                placeholder="Write a comment"
              />
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  profilePost: {
    width: 30,
    height: 30,
    borderRadius: 50,
    margin: 10,
  },
  profileId: {
    fontSize: 10,
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftTop: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  postImgParent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  postImg: {
    width: 500,
    height: 250,
  },
  likeOfPost: {
    width: 30,
    height: 30,
  },
  direct: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
  saveIcon: {
    width: 30,
    height: 30,
  },
  postOperation: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: 5,
  },
  postSave: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  comment: {
    fontSize: 12,
  },
  likesCount: {
    marginLeft: 5,
  },
  caption: {
    marginLeft: 5,
  },
  translate: {
    marginLeft: 5,
  },
  id: {
    marginLeft: 5,
  },
  parent: {
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    borderBottomWidth: 1,
    width: '50%'
  }
});

export default Posts;
