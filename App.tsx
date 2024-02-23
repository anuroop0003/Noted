import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import {MMKV} from 'react-native-mmkv';
import SplashScreen from 'react-native-splash-screen';
import Loader from './src/components/Loader/Loader';
import Home from './src/screens/Home/Home';
import Login from './src/screens/Login/Login';

export const storage = new MMKV();

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  useEffect(() => {
    const timer = setTimeout(() => SplashScreen.hide(), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <NavigationContainer>
        <Loader />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
