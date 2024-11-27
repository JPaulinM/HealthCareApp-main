import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Text, Button } from 'react-native-paper';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Avatar.Image size={100} source={{ uri: 'https://via.placeholder.com/100' }} />
      <Text variant="headlineSmall" style={styles.name}>
        Jane Doe
      </Text>
      <Text style={styles.info}>Email: jane.doe@example.com</Text>
      <Text style={styles.info}>Phone: +123 456 7890</Text>

      <Button mode="contained" style={styles.button}>
        Edit Profile
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  name: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  info: {
    marginTop: 5,
    color: '#555',
  },
  button: {
    marginTop: 20,
  },
});

export default ProfileScreen;
