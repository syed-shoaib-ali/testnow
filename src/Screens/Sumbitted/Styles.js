// Default Imports
import {StyleSheet} from 'react-native';
// Import From Another Screens
import Theme from '../../utils/Theme';

//Start Code

const styles = StyleSheet.create({
  MainView: {
    alignItems: Theme.align,
    justifyContent: Theme.align,
    flex: 1,
  },
  txtSubmited: {
    fontSize: Theme.txtHeighest,
    fontWeight: Theme.bold,
    color: '#1dc0eb',
  },
  txtSubmitedWrap: {
    position: 'absolute',
    paddingTop: 50,
  },
  tickGif: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
});

export default styles;
