import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {storage} from '../../../App';
import useStore from '../../store/store';
import {fonts} from '../../utils/fonts';
import {getBackgroundStyle, getUser} from '../../utils/helperFunctions';

function Login(): React.JSX.Element {
  const backgroundStyle = getBackgroundStyle();
  const navigation = useNavigation();
  const user = getUser();
  const {setLoading} = useStore();
  useEffect(() => {
    if (user) {
      navigation.navigate('Home');
    }
  }, []);

  async function handleGoogleLogin() {
    setLoading(true);
    try {
      GoogleSignin.configure();
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      storage.set('user', JSON.stringify(userInfo));
      navigation.navigate('Home');
      setLoading(false);
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={{...styles.container, ...backgroundStyle}}>
      <StatusBar
        barStyle={backgroundStyle.barStyle}
        backgroundColor={backgroundStyle?.backgroundColor}
      />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Text style={styles.text}>Noted</Text>
          <Image
            style={styles.image}
            source={require('../../assets/common/logo.png')}
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

export default Login;
