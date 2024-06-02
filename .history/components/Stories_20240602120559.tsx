import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const StoryImage = ({ source, borderColor }) => {
  return (
    <View style={styles.imageParent}>
      {Array.isArray(borderColor) ? (
        <LinearGradient colors={borderColor} style={styles.imageBorder}>
          <Image style={styles.image} source={source} />
        </LinearGradient>
      ) : (
        <Image style={[styles.image, { borderColor }]} source={source} />
      )}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

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
