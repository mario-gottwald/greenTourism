import { useContext } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import { AppContext } from '../components/pointsProvider';


const AngeboteScreen = () => {
  const { points, setPoints } = useContext(AppContext);
  
  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => {
        // Alert bei Klick auf Gutschein. Zieht 5 Punkte ab wenn vorhanden
        if (points < 5) {
          Alert.alert(
          'Gutschein',
          '\nHier rufst du in Zukunft deinen Gutscheincode ab. \n\nDu hast nicht genug Punkte für diesen Gutschein!',
          [{ text: 'OK' }]
        );
        } else {
          Alert.alert(
            'Gutschein',
            '\nHier rufst du in Zukunft deinen Gutscheincode ab. \n\nDanke fürs Ausprobieren! Nun bist du bereit für die Umfrage.',
            [{ text: 'OK' }]
          );
          setPoints(points - 5)
        }
      }} style={styles.voucherStyle}>

        { /* Demo-Gutschein */ }
        <ImageBackground source={require('../../assets/strudel.jpg')} imageStyle={{borderRadius: 15}} style={{flex: 1}}>
          <Text style={[styles.whiteBold, {fontSize: 20, margin: 10}]}>5 Punkte</Text>
          <Text style={[styles.whiteBold, {fontSize: 15, margin: 10, marginTop: 70}]}>Gratis Strudel am Strudelfest 2025!</Text>
        </ImageBackground>
        <Text style={{fontSize: 10, margin: 10}}>© Region Seefeld</Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'light-grey',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  voucherStyle: {
    height: 170, 
    width: '95%', 
    marginVertical: 5, 
    borderRadius: 15,
  },
  whiteBold: {
    fontWeight: 'bold', 
    color: 'white',
  },
});

export default AngeboteScreen;