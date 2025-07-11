import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebaseConfig';
import { PointProvider } from './app/components/pointsProvider';


import WelcomeScreen from './app/screens/Welcome';
import Intro from './app/screens/Intro';
import LoginScreen from './app/screens/Login';
import RegisterScreen from './app/screens/Register';
import MainScreen from './app/navigation/Main'

const Stack = createStackNavigator();

export default function App() {
  const auth = FIREBASE_AUTH;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) return null;

  return (
    <PointProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {!user ? (
            <>
              <Stack.Screen name="Willkommen" component={WelcomeScreen}/>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Registrieren" component={RegisterScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="Intro" component={Intro} />
              <Stack.Screen name="Home" component={MainScreen} options={{headerShown: false}}/>
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PointProvider>
  );
}