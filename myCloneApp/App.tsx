import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        
        <View style={styles.headerContainer}>
          <Text style={styles.profileName}>ootd_everyday</Text>
          <Text style={styles.viaText}>via frenchie_fry39</Text>
        </View>

        
        <Image
          source={{ uri: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fsunny-summer-background-with-clear-blue-sky-lush-green-meadow-tranquil-sunny-sunny-weather-field-summer-vibes-vibrant-sunny-day-nature-macro-blue-sky-peaceful-sunlight_1336356-632.jpg&tbnid=7WBfKWa_siVn0M&vet=10CAIQxiAoAGoXChMI8LqLlp-KiwMVAAAAAB0AAAAAEAY..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fpremium-ai-image%2Fsunny-summer-background-with-clear-blue-sky-lush-green-meadow-tranquil-sunny-sunny-weather-field-summer-vibes-vibrant-sunny-day-nature-macro-blue-sky-peaceful-sunlight_322353962.htm&docid=rn3usFBHjmyf5M&w=626&h=417&itg=1&q=sunnt%20day&ved=0CAIQxiAoAGoXChMI8LqLlp-KiwMVAAAAAB0AAAAAEAY" }} // Replace URI with actual image link
          style={styles.postImage}
        />

        
        <View style={styles.textContainer}>
          <Text style={styles.likesText}>Liked by paisley.print.48 and 7 others</Text>
          <Text style={styles.captionText}>
            <Text style={styles.usernameText}>frenchie_fry39 </Text>
            Fresh shot on a sunny day! 
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  viaText: {
    fontSize: 14,
    color: '#888',
  },
  postImage: {
    width: '100%',
    height: 400,
  },
  textContainer: {
    padding: 10,
  },
  likesText: {
    fontWeight: 'bold',
  },
  captionText: {
    marginTop: 5,
  },
  usernameText: {
    fontWeight: 'bold',
  },
});
