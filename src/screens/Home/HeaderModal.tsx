import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {RFValue} from 'react-native-responsive-fontsize';
import {storage} from '../../../App';
import customStyles from '../../utils/customStyles';
import {fonts} from '../../utils/fonts';

type Props = {
  visible: boolean;
  userData: object;
  setModalVisible: (value: boolean) => void;
};

export default function HeaderModal({
  visible,
  userData,
  setModalVisible,
}: Props) {
  const navigation = useNavigation();

  function handleBackPress() {
    setModalVisible(false);
  }

  function handleLogOut() {
    GoogleSignin.configure();
    storage.clearAll();
    GoogleSignin.signOut();
    navigation.navigate('Login');
  }
  return (
    <ReactNativeModal
      animationIn="slideInUp"
      animationOut="slideOutDown"
      hasBackdrop={false}
      onBackdropPress={handleBackPress}
      onBackButtonPress={handleBackPress}
      isVisible={visible}>
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Image
            style={styles.headerImage}
            source={{uri: userData?.user?.photo}}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.userName}>{userData?.user?.name}</Text>
            <Text style={styles.userMail}>{userData?.user?.email}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => handleLogOut()}>
          <Text style={styles.logOut}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ReactNativeModal>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: customStyles['color-primary'],
    paddingBottom: 20,
    marginBottom: 20,
  },
  logOut: {
    color: customStyles['color-primary'],
    fontSize: RFValue(16),
    fontFamily: fonts.PP400,
    marginVertical: 10,
  },
  container: {
    // flex: 1,
    backgroundColor: customStyles['modal-bg'],
    elevation: 10,
    borderRadius: 20,
    padding: 20,
  },
  textContainer: {
    marginLeft: 20,
  },
  userName: {
    color: customStyles['color-primary'],
    fontSize: RFValue(24),
    fontFamily: fonts.PP500,
  },
  userMail: {
    color: customStyles['color-primary'],
    fontSize: RFValue(12),
    fontFamily: fonts.PP400,
    marginTop: -10,
  },
  headerImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});
