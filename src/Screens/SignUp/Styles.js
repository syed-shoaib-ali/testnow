import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
import Theme from '../../utils/Theme';

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
  termConditionWrap: {
    flexDirection: 'row',
    marginTop: 20,
    right: 5,
  },
  txtTerm: {
    fontSize: 14,
    color: '#6B7280',
  },
  txtUnderLine: {
    textDecorationLine: 'underline',
  },
  flexRowWrap: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  VerLine: {
    width: '40%',
    borderTopWidth: 1,
    borderColor: '#C7C7C7',
  },
  txtOr: {
    fontSize: 16,
    color: '#6B7280',
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
  heiWidT: {
    height: 20,
    width: 20,
  },
  heiWidTen: {
    height: 20,
    width: 10,
  },
  bottomSocial: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 10,
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
