import LottieView from 'lottie-react-native';
import {Modal, StyleSheet, View} from 'react-native';
import useStore from '../../store/store';

type Props = {};

export default function Loader({}: Props) {
  const {loading} = useStore();
  return (
    loading && (
      <Modal transparent>
        <View style={styles.container}>
          <LottieView
            style={styles.lottie}
            source={require('../../assets/lotties/loader.json')}
            autoPlay
            loop
          />
        </View>
      </Modal>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
    backgroundColor: '#00000080',
  },
  lottie: {
    height: '100%',
    width: '100%',
  },
});
