import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DashboardScreen from '../screens/Dashboard';
import AddModal from '../screens/AddModal';
import AngeboteScreen from '../screens/Angebote';

const Tab = createBottomTabNavigator();

// 3-teilige BottomTab Navigation
const Tabs = () => { 
  const [isModalVisible, setModalVisible] = useState(false);

  return(
    <View style={{ flex: 1}}>
      
        <Tab.Navigator 
          screenOptions={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image
                  source={require('../../assets/drawer.png')}
                  style={{ resizeMode: 'contain', width: 20, marginLeft: 20, tintColor: '#112713' }}
                />
              </TouchableOpacity>
            ),
            tabBarShowLabel: false,
            tabBarStyle: {
              position: 'absolute',
              paddingHorizontal: 10,
              paddingTop: 5,
              backgroundColor: 'white',
              height: 105,
              borderTopRadius: 15,
            },
          })}
        >
          <Tab.Screen 
          name='Dashboard' 
          component={DashboardScreen} 
          options={getTabOptions(require('../../assets/home.png'))}
          />

          {/* not really a Screen but the modal which appears in front of current screen */}
          <Tab.Screen name='NewItem'
          options={{
              tabBarIcon: () => (
                  <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Image
                      source={require('../../assets/plus.png')}
                      style={styles.addingIcon}
                  />
                  </TouchableOpacity>
              ),
          }}
          >
          {/* return null until Button is pressed */}
          {() => null}
          </Tab.Screen>

          <Tab.Screen name='Angebote' component={AngeboteScreen} 
                      options={getTabOptions(require('../../assets/vouchers.png'))}
          />

      </Tab.Navigator>

      <AddModal isModalVisible={isModalVisible} setModalVisible={setModalVisible} />
    </View>
  );
}

const getTabOptions = (iconSource) => ({
  tabBarIcon: ({focused}) => (
    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
      <Image
        source={iconSource}
        resizeMode='contain'
        style={{
          width: 40,
          tintColor: focused ? '#95c22b' : '#999999',
        }}
      />
    </View>
  )
});

const styles = StyleSheet.create({
  addingIcon: {
    resizeMode: 'contain',
    backgroundColor: 'white',
    top: -15,
    borderRadius: 100,
    width: 60,
    height: 60,
    tintColor: '#95c22b',
  },
});

export default Tabs;