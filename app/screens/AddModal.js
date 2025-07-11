import { useContext, useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, StyleSheet, Image, ScrollView, } from 'react-native';
import Modal from 'react-native-modal';
import { SelectList } from 'react-native-dropdown-select-list';
import { AppContext } from '../components/pointsProvider';



const AddModal = ({ isModalVisible, setModalVisible }) => {
  const [selected, setSelected] = useState('');
  const [betrag, setBetrag] = useState(0);
  const { points, setPoints } = useContext(AppContext);

  const handleInputChange = (text) => {
    const cleaned = text.replace(',', '.');
    const asFloat = parseFloat(cleaned);
    const asInt = Math.floor(asFloat);
    setBetrag(asInt);
  };

  // Dropdown-Menü items
  const selectOptions = [
    {key:'1', value:'Hofladen Neuner'},
    {key:'2', value:'Emissionsfreies Reisen'},
    {key:'3', value:'Green Resort Hotel'},
    {key:'4', value:'Erlebnisausflüge Grüner'},
  ] 

  return (
    <Modal
      isVisible={isModalVisible}
      animationIn='fadeIn'
      animationOut='fadeOut'
      onBackdropPress={() => {setModalVisible(false); setBetrag('')}}>

      <View style={styles.modalContent}>
        
        {/* header */}
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 20}}>
          <View style={{width: 15}}/>
          <Text style={{flex: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 17 }}>Erfassen</Text>
          <TouchableOpacity onPress={() => {setModalVisible(false); setBetrag('')}}>
            <Image
                source={require('../../assets/close.png')}
                style={{ resizeMode: 'contain', height: 15, width: 15 }}
            />
          </TouchableOpacity>
        </View>
        
        { /* modal body */ }
        <ScrollView contentContainerStyle={{height: 200, alignItems: 'center'}}>
          
          { /* Dropdown Menü */ }
          <SelectList 
            setSelected={setSelected}
            placeholder='Betrieb auswählen'
            data={selectOptions}
            search={false}
            save="value"
            inputStyles={{fontSize: 17, fontWeight: 'bold', color: 'white'}}
            searchicon={<></>}
            dropdownTextStyles={{textAlign: 'center', marginHorizontal: 30}}
            arrowicon={
              <Image
                source={require('../../assets/down.png')}
                style={{ resizeMode: 'contain', height: 15, width: 15 }}
              />
            }
            boxStyles={{ borderRadius:5, width: 300, backgroundColor: '#112713' }}
            dropdownStyles={
              { alignItems: 'center', top:-15, borderRadius: 5, borderWidth: 1, borderTopWidth: 0, height: 140, borderColor:'#112713'}}
          />

          { /* Input für Betrag */ }
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
              <Text style={{fontSize: 20, marginHorizontal: 15}}>Betrag: </Text>
              <TextInput value={betrag} keyboardType="decimal-pad" style={styles.input} placeholder='EUR' onChangeText={(text) => handleInputChange(text)}></TextInput>
          </View>
          
          <Text style={{fontSize: 10, margin: 12, textAlign: 'center'}}>z.B.: 1 € = 1 Pkt. </Text>

          { /* Bestätigen Button */ }
          <TouchableOpacity style={styles.button} onPress={() => {
            // erhöht den Punktbetrag um den Eurobetrag
            if (betrag > 0) setPoints(points + betrag);
            setSelected('');
            setBetrag('');
            Alert.alert(
              'Überprüfung der Eingaben',
              '\nWenn die App weiter umgesetzt wird, müssten deine Eingaben anhand einer Rechnung überprüft werden.',
              [{ text: 'Verstanden!' }]
            );
            setModalVisible(false);
            }}>
            <Text style={{color: 'white'}}>Bestätigen</Text>
          </TouchableOpacity>
          
        </ScrollView>
      </View>

    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 0,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  input: {
    textAlign: 'right', 
    paddingHorizontal: 10,
    marginHorizontal: 15,
    borderWidth: 2,
    borderColor: '#112713',
    borderRadius: 5,
    height: 40, 
    width: 100
	},
  button: {
    width: 150,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#112713',
    borderRadius: 10,
  },
});

export default AddModal;
