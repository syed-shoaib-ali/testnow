import {StyleSheet, Dimensions} from 'react-native';
import Theme from '../../../utils/Theme';

const styles = StyleSheet.create({
  MainView: {
    backgroundColor: Theme.white,
    flex: 1,
  },
  srcWidthWrap: {
    width: Theme.setWidth,
    alignSelf: 'center',
  },
  btnReset: {
    alignSelf: 'center',
    marginVertical: Theme.marginHor,
  },
  wrapIndicat: {
    flex: 1,
    opacity: 0.5,
    backgroundColor: Theme.black,
    width: '100%',
    justifyContent: Theme.align,
  },
});

export default styles;
