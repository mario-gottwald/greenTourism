import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FIREBASE_AUTH } from '../../firebaseConfig';


const ProfileScreen = ({navigation}) => {
  const auth = FIREBASE_AUTH;
  const user = auth.currentUser;

  // while loading
  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Loading user data...</Text>
      </View>
    );
  }

  // Email Adresse und Logout-Button
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icon.png')}
        style={{ resizeMode: 'contain', height: 150, marginBottom: 50 }}
      />
      <Text>Email-Adresse: {user.email}</Text>
      <TouchableOpacity onPress={() => auth.signOut()} style={styles.button}>
        <Text style={{ color: 'white' }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'light-grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    padding: 10,
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#112713',
    borderRadius: 10,
  },
});

export default ProfileScreen;