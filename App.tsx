import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import React, {useEffect} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {fonts} from './src/utils/fonts';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  GoogleSignin.configure();

  async function handleGoogleLogin() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      Alert.alert(JSON.stringify(userInfo));
      await GoogleSignin.signOut();
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <SafeAreaView style={{...styles.container, ...backgroundStyle}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Text style={styles.text}>Noted</Text>
          <Image
            style={styles.image}
            source={require('./src/assets/Common/logo.png')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <GoogleSigninButton
            onPress={() => handleGoogleLogin()}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            disabled={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 120,
  },
  text: {
    marginVertical: 60,
    fontSize: 48,
    fontFamily: fonts.FI700,
  },
  buttonContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
