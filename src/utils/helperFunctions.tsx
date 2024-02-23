import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {storage} from '../../App';

function getUser() {
  const jsonUser = storage.getString('user') || null;
  const userObject = JSON.parse(jsonUser);
  return userObject;
}

function getBackgroundStyle() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    barStyle: isDarkMode ? 'light-content' : 'dark-content',
  };
  return backgroundStyle;
}

export {getBackgroundStyle, getUser};
