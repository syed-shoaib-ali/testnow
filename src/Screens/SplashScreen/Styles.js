// Default Imports
import {StyleSheet} from 'react-native';

// Import From Another Screens
import Theme from '../../utils/Theme';

//Start Code
const styles = StyleSheet.create({
  MainView: {
    alignItems: Theme.align,
    justifyContent: Theme.align,
    backgroundColor: Theme.white,
    flex: 1,
  },
  logoSize: {
    height: Theme.hp('100%'),
    width: Theme.wp('100%'),
  },
});

export default styles;
