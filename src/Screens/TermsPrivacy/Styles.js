import {StyleSheet} from 'react-native';
import Theme from '../../utils/Theme';

const styles = StyleSheet.create({
  MainView: {
    backgroundColor: Theme.white,
    flex: 1,
  },
  srcWidthWrap: {
    width: Theme.setWidth,
    alignSelf: 'center',
    // backgroundColor: 'yellow',
  },
  txtDesc: {
    fontSize: 14,
    textAlign: 'justify',
    color: Theme.grey,
  },
  txtMainTitle: {
    fontSize: Theme.mainBtnSize,
    textAlign: 'left',
    fontWeight: Theme.bold,
  },
});

export default styles;
