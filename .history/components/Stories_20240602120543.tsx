import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";



const Stories = ({ stories, borderColors }) => {
  return (
    <View style={styles.container}>
      {stories.map(story => (
        <StoryImage
          key={story.id}
          source={story.image}
          borderColor={borderColors[story.status]}
          text={story.name}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
  imageParent: {
    alignItems: 'center',
  },
  image: {
    borderRadius: 50,
    width: 70,
    height: 70,
    borderWidth: 3,
  },
  imageBorder: {
    borderRadius: 50,
    padding: 3,
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
  },
});

export default Stories;
