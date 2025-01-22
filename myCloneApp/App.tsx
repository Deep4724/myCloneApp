import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; 

const App = () => {
  const showAlert = () => Alert.alert("Alert Button pressed");

  return (
    <View style={styles.container}>
      <ScrollView>
        
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <Icon name="arrow-left" size={20} color="#000" />
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Image
              source={{ uri: "https://via.placeholder.com/40" }}
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>ootd_everyday</Text>
            <Text style={styles.viaText}>via frenchie_fry39</Text>
          </View>
          <TouchableOpacity>
            <Icon name="ellipsis-v" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpwDHFmblnvAPvAZ2_fmZy2XdwTJ1vnDE0EmXthK_Xkvnskf42JCW90OwjRV1dxddXzfk&usqp=CAU/400X300",
          }}
          style={styles.postImage}
        />

        
        <View style={styles.iconsRow}>
          <TouchableOpacity>
            <Icon name="heart" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="comment" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="paper-plane" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveIcon}>
            <Icon name="bookmark" size={24} color="black" />
          </TouchableOpacity>
        </View>

        
        <View style={styles.textContainer}>
          <Text style={styles.likesText}>Liked by paisley.print.48 and 7 others</Text>
          <Text style={styles.captionText}>
            <Text style={styles.usernameText}>frenchie_fry39 </Text>
            Fresh shot on a sunny day!
          </Text>
          <Text style={styles.commentText}>View all 12 comments</Text>
          <Text style={styles.commentText}>
            <Text style={styles.usernameText}>lil_wyatt838 </Text>
            Awesome tones
          </Text>
          <Text style={styles.commentText}>
            <Text style={styles.usernameText}>pia.in.a.pod </Text>
            Gorg. Love it!
          </Text>
        </View>

        
        <TouchableOpacity onPress={showAlert} style={styles.alertButton}>
          <Text style={styles.alertButtonText}>Alert</Text>
        </TouchableOpacity>
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
  headerTextContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  saveIcon: {
    marginLeft: 'auto',
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
  commentText: {
    marginTop: 5,
    color: '#888',
  },
  alertButton: {
    backgroundColor: 'red',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  alertButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
