import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import Theme from '../../../utils/Theme';

const styles = StyleSheet.create({
  MainView: {
    backgroundColor: '#fff',
    flex: 1,
  },
  srcWidthWrap: {
    width: width - 50,
    alignSelf: 'center',
    // backgroundColor: 'yellow',
  },

  txtOr: {
    fontSize: 16,
    color: '#6B7280',
    alignSelf: 'center',
  },
  customWrapBtn: {
    width: 50,
    borderRadius: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialBtnWWrap: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: '10%',
  },
  errorTxt: {
    color: 'red',
    fontSize: 10,
    paddingHorizontal: 10,
  },
  wraptxtInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 60,
    marginTop: 10,
  },
});

export default styles;
