import { Image, StyleSheet, ImageBackground, Text, View, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { useContext } from 'react';
import { AppContext } from '../components/pointsProvider';


const DashboardScreen = () => {
  const { points, setPoints } = useContext(AppContext);


  return (
      <ScrollView contentContainerStyle={styles.container}>
        { /* Punkteanzeige */ }
        <View style={{backgroundColor: '#112713', width: '100%', alignItems: 'center', padding: 20}}>
          <Text style={{fontSize: 55, color: 'white'}}>{points}</Text>
          <Text style={[styles.whiteBold, {fontSize: 30}]}>PUNKTE</Text>
          <Text style={{color: 'white', fontSize: 15}}>Guthaben</Text>
        </View>

        { /* statische beispielhafte Ausgabe von Nachhaltigkeitskennzahlen */ }
        <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{backgroundColor: '#112713', width: '50%', alignItems: 'center', paddingBottom: 20}}>
              <Text style={[styles.whiteBold, {fontSize: 40}]}>14</Text>
              <View style={{margin: 10, height: 3, width: '75%', backgroundColor: '#95c22b'}}/>
              <Text style={[styles.whiteBold, {fontSize: 15, textAlign: 'center'}]}>lokale Produzenten unterstützt</Text>
            </View>
            <View style={{backgroundColor: '#112713', width: '50%', alignItems: 'center', paddingBottom: 20}}>
              <Text style={[styles.whiteBold, {fontSize: 40}]}>123 km</Text>
              <View style={styles.splitBar}/>
              <Text style={[styles.whiteBold, {marginTop: 5, fontSize: 15, textAlign: 'center'}]}>umweltschonend gereist</Text>
            </View>
        </View>

        { /* News Section mit verlinkungen */ }
        <Text style={{marginTop: 20, width: '90%', fontSize: 30, textAlign: 'left', color: '#112713', fontWeight: 'bold'}}>News</Text>
        <View style={{alignSelf: 'left', height: 5, width: '50%', backgroundColor: '#112713', marginBottom: 10}}/>
        
        <TouchableOpacity onPress={() => Linking.openURL('https://www.seefeld.com/de/cleanupplateau-challenge.html')} style={styles.newsStyle}>
          <ImageBackground source={require('../../assets/generationen.jpg')} imageStyle={{borderRadius: 15}} style={{flex: 1}}>
            <Text style={[styles.whiteBold, {fontSize: 10, margin: 10}]}>© Region Seefeld</Text>
            <Text style={[styles.whiteBold, {fontSize: 15, margin: 10, marginTop: 50}]}>"Wir denken in Generationen und nicht in Quartalszahlen." - Elias Walser</Text>
          </ImageBackground>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => Linking.openURL('https://www.seefeld.com/de/echt-nachhaltig.html')} style={[styles.newsStyle, {backgroundColor: 'green'}]}>
          <ImageBackground source={require('../../assets/cleanup.jpg')} imageStyle={{borderRadius: 15}} style={{flex: 1}}>
            <Text style={[styles.whiteBold, {fontSize: 10, margin: 10, marginBottom: 60}]}>© www.freepik.com</Text>
            <Text style={[styles.whiteBold, {fontSize: 25, margin: 10}]}>CleanUp am Hochplateau</Text>
          </ImageBackground>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => Linking.openURL('https://www.seefeld.com/de/echt-nachhaltig.html')} style={[styles.newsStyle, {backgroundColor: 'green'}]}>
          <ImageBackground source={require('../../assets/umweltzeichen.png')} imageStyle={{borderRadius: 15}} style={{flex: 1}}>
            <Text style={[styles.whiteBold, {color: 'grey', fontSize: 10, margin: 10, marginBottom: 50}]}>© Region Seefeld</Text>
            <Text style={[styles.whiteBold, {fontSize: 15, margin: 10}]}>Österreichisches Umweltzeichen für die Region Seefeld - Tirols Hochplateau</Text>
          </ImageBackground>
        </TouchableOpacity>

        { /* Beispielhafte, statische Rangliste */ }
        <Image source={require("../../assets/ranking.png")} style={{width: '90%', resizeMode: 'contain', maxHeight: 500}}/>
      </ScrollView>
    );  
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 130,
    backgroundColor: 'light-grey',
    alignItems: 'center',
  },
  splitBar: {
    margin: 10, 
    height: 3, 
    width: '75%', 
    backgroundColor: '#95c22b'
  },
  whiteBold: {
    fontWeight: 'bold', 
    color: 'white',
  },
  newsStyle: {
    height: 130, 
    width: '90%', 
    marginVertical: 5, 
    borderRadius: 15,
  },
  button: {
    width: 150,
    padding: 10,
    margin: 8,
    alignItems: 'center',
    backgroundColor: '#112713',
    borderRadius: 10,
  },
});

export default DashboardScreen;