import React from "react";
import { View, Text, StyleSheet } from "react-native";





const header = () => {
    return (
        <View>
                  <Image 
        style={styles.logo}
        source={require('./asset/logo.png')}
      />

      <View style={styles.rightHeader}>
      <Image 
        style={styles.like}
        source={require('./asset/like.png')}
      />
      <Image 
        style={styles.direct}
        source={require('./asset/direct.png')}
      />
      </View>
        </View>
    )
}



export default header;