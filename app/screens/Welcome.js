import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const WelcomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../../assets/iconTextOnly.png')} style={{resizeMode: 'contain', height: 70, marginBottom: 25}}/>
      
      {/* Einführungstext */}
      <Text style={[styles.whiteText, {fontSize: 16, lineHeight: 24}]}>Willkommen & danke für Ihre Teilnahme!{"\n"}{'\n'}Dieser Prototyp ist keine fertige App, sondern ein vereinfachtes Modell, das im Rahmen einer wissenschaftlichen Arbeit entwickelt wurde.{'\n'}{'\n'}Es soll auf einfache und verständliche Weise gezeigt werden, wie Gamification (der Einsatz von spielerischen Elementen in nicht-spielerischen Kontexten) im Bereich nachhaltiger Tourismus eingesetzt werden kann.{"\n"}{"\n"}Im Anschluss können Sie an einer kurzen Umfrage teilnehmen und damit zur Forschung für meine Bachelorarbeit beitragen. Viel Spaß beim Ausprobieren!</Text>
      
      {/* Login & Registrieren button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={{color: '#28430a'}}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registrieren')}>
        <Text style={{color: '#28430a'}}>REGISTRIEREN</Text>
      </TouchableOpacity>
      
      <Text style={[styles.whiteText, {marginTop: 5, textAlign: 'center'}]}>Es werden keine personenbezogenen Daten gespeichert.</Text>
    </View>
  );   
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#112713',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: 'white', 
    width: '85%', 
    marginBottom: 5,
  },
  button: {
    width: 170,
    padding: 12,
    marginBottom: 5,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  }
});


export default WelcomeScreen;