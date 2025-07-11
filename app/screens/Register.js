import { StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, deleteUser } from 'firebase/auth';


const RegisterScreen = ({navigation}) => {
	const [email , setEmail] = useState('');
	const [password , setPassword] = useState('');
  const [loading , setLoading] = useState(false);
	const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);

    try {
        await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        alert(`Error: ${error.message}`);
        console.log(error);
    } finally {
        setLoading(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/icon.png')} style={{resizeMode: 'contain', height: 150, marginVertical: 50, alignSelf: 'center'}}/>
      <KeyboardAvoidingView>
        {/* Eingabefelder */}
        <TextInput value={email} autoCapitalize='none' style={styles.input} placeholder='Email' onChangeText={(text) => setEmail(text)}></TextInput>
        <TextInput value={password} secureTextEntry={true} autoCapitalize='none' style={styles.input} placeholder='Password' onChangeText={(text) => setPassword(text)}></TextInput>
      </KeyboardAvoidingView>
      
      {/* Register-Button */}
      <TouchableOpacity onPress={() => {signUp();}} 
      style={[styles.button, {marginTop: 40}]}>
        <Text style={{color: 'white'}}>Jetzt registrieren!</Text>
      </TouchableOpacity>
    </ScrollView>

  );   
}

const styles = StyleSheet.create({
  container: {
    fley: 1,
    backgroundColor: 'light-grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    alignSelf: 'center',
    textAlign: 'center', 
    backgroundColor: 'white', 
    marginVertical: 5,
    borderRadius: 5,
    height: 40, 
    width: 300
	},
  button: {
    alignSelf: 'center',
    width: 170,
    padding: 12,
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#112713',
    borderRadius: 20,
  },
});

export default RegisterScreen;