import { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

// Array von Tutorial-Seiten
const slides = [
  {
    bild: require("../../assets/info.png"),
    text: "Für Einkäufe bei nachhaltigen Partnerbetrieben werden Punkte verliehen, die wiederum in Form von Rabatten oder anderen Vorteilen bei denselben Betrieben eingelöst werden können.",
  },
  {
    bild: require("../../assets/punkte.png"),
    text: "Alle Aktivitäten, die du in der App erfasst, bringen dir Punkte ein. Sammle sie und hol dir tolle Vorteile und Rabatte bei nachhaltigen Partnerbetrieben!",
  },
  {
    bild: require("../../assets/badges.png"),
    text: "Für besondere Meilensteine und nachhaltige Taten wirst du mit Abzeichen belohnt. Sammle sie fleißig und zeig allen, wie du dich für unseren Urlaubsort einsetzt.",
  },
  {
    bild: require("../../assets/ranking.png"),
    text: "Jede Woche neu durchstarten! Entdecke kreative Möglichkeiten, Punkte zu sammeln – montags beginnt das Ranking bei null. Unter allen Teilnehmenden wird regelmäßig ein Gewinn verlost!",
  },
];

const Intro = ({navigation}) => {
  // Zähler für Seite  
  const [index, setIndex] = useState(0);

  // zurück im Tutorial
  const vorher = () => {
      if (index > 0) setIndex(index - 1);
  };

  // nächste Seite im Tutorial
  const weiter = () => {
      if (index < slides.length - 1) {
          setIndex(index + 1);
      // navigate Home wenn Tutorial zu ende
      } else {
          setIndex(0);
          navigation.navigate('Home');
      }
  };

  return (
    <View style={styles.container}>
      {/* Icon & Erklärungstext */}
      <Image source={slides[index].bild} style={styles.bild} />
      <Text style={styles.text}>{slides[index].text}</Text>
      {/* Vor/Zurück-Knöpfe */}
      <View style={{flexDirection: 'row'}}>
        {index === 0 ? 
        <></>
        : 
        <TouchableOpacity onPress={vorher} disabled={index === 0} style={styles.button}>
          <Text style={{textAlign: 'center', color: 'white'}}>Zurück</Text>
        </TouchableOpacity> 
        }
        <TouchableOpacity onPress={weiter} style={styles.button}>
          <Text style={{textAlign: 'center', color: 'white'}}>{index === slides.length - 1 ? 'Fertig' : 'Weiter'}</Text>
        </TouchableOpacity> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bild: {
    width: '80%',
    maxHeight: 300,
    resizeMode: "contain",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
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

export default Intro;