import { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Image } from 'react-native';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { TextInput } from 'react-native-gesture-handler';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = ({navigation}) => {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [loading , setLoading] = useState('');
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        alert('Sign in failed: ' + error.message);
    } finally {
        setLoading(false);
    }
  }

  return (

    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Image source={require('../../assets/icon.png')} style={{resizeMode: 'contain', height: 150, marginBottom: 50}}/>
      {/* Eingabefelder */}
      <KeyboardAvoidingView>
        <TextInput value={email} autoCapitalize='none' style={styles.input} placeholder='Email' onChangeText={(text) => setEmail(text)}></TextInput>
        <TextInput value={password} secureTextEntry={true} autoCapitalize='none' style={styles.input} placeholder='Password' onChangeText={(text) => setPassword(text)}></TextInput>
      </KeyboardAvoidingView>
      {loading ? (
          <ActivityIndicator style={{marginTop: 40}} size='large' color='#112713'/>
      ) : (
        <>
          {/* Login-Button */}
          <TouchableOpacity onPress={signIn} style={[styles.button, {marginTop: 40}]}>
              <Text style={{color: 'white'}}>Login</Text>
          </TouchableOpacity>
          {/* zum Registrierungs Screen */}
          <TouchableOpacity onPress={() => navigation.navigate('Registrieren')} style={[styles.button, {backgroundColor: 'white', borderWidth: 1, borderColor: '#112713'}]}>
              <Text style={{textAlign: 'center', color: '#112713'}}>Neu hier? Erstelle einen Account</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'light-grey',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80,
  },
  button: {
    width: 170,
    padding: 12,
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#112713',
    borderRadius: 20,
  },
  input: {
				textAlign: 'center', 
				backgroundColor: 'white', 
				marginVertical: 5,
				borderRadius: 5,
				height: 40, 
				width: 300
		},
});

export default LoginScreen;