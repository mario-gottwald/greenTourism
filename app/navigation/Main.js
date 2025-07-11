import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, TouchableOpacity } from 'react-native';
import { PointProvider } from '../components/pointsProvider';

import Tabs from './Tabs';
import AccountScreen from '../screens/Account';
import Intro from '../screens/Intro';

const Drawer = createDrawerNavigator();

// Body der App | nach erfolgreichem Login/Register
const MainScreen = () => {
  
  return (
      // Drawer Navigation links oben
      <Drawer.Navigator
        screenOptions={({navigation}) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={require('../../assets/drawer.png')}
                style={{resizeMode: 'contain', width: 20, marginLeft: 20 }}
              />
            </TouchableOpacity>
          ),
          drawerActiveBackgroundColor: '#112713',
          drawerActiveTintColor: 'white'
        })}
      >
        <Drawer.Screen name='Main' component={Tabs} options={{headerShown: false}}/>
        <Drawer.Screen name='Intro' component={Intro}/>
        <Drawer.Screen name='Account' component={AccountScreen}/>
      </Drawer.Navigator>
  );
};

export default MainScreen;