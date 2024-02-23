import LottieView from 'lottie-react-native';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getBackgroundStyle} from '../../utils/helperFunctions';
import Header from './Header';

export default function Home(): React.JSX.Element {
  const backgroundStyle = getBackgroundStyle();

  function handleAddClick() {
    console.log('clicked');
  }
  return (
    <SafeAreaView style={{...styles.container, ...backgroundStyle}}>
      <StatusBar
        barStyle={backgroundStyle.barStyle}
        backgroundColor={backgroundStyle?.backgroundColor}
      />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          scrollEventThrottle={16}>
          <Header />
          <View style={styles.scrollContainer}>
            <Text>Test</Text>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.lotieContainer}
              onPress={handleAddClick}>
              <LottieView
                style={styles.lottie}
                source={require('../../assets/lotties/add.json')}
                autoPlay
                loop
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollViewContent: {
    flex: 1,
  },

  lotieContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 80,
    width: 80,
  },
  lottie: {
    height: '100%',
    width: '100%',
  },
});
