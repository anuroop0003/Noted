import {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import customStyles from '../../utils/customStyles';
import {fonts} from '../../utils/fonts';
import {getUser} from '../../utils/helperFunctions';
import HeaderModal from './HeaderModal';

type Props = {};

export default function Header({}: Props): React.JSX.Element {
  const userData = getUser();
  const [isModalVisible, setModalVisible] = useState(false);

  function handleModalOpen() {
    setModalVisible(true);
  }
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Noted</Text>
        <TouchableOpacity activeOpacity={1} onPress={handleModalOpen}>
          <Image
            style={styles.headerImage}
            source={{uri: userData?.user?.photo}}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <HeaderModal
        visible={isModalVisible}
        userData={userData}
        setModalVisible={setModalVisible}
      />
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: customStyles['color-primary'],
    fontSize: RFValue(24),
    fontFamily: fonts.FI700,
  },
  headerImage: {
    height: 35,
    width: 35,
    borderRadius: 50,
  },
});
