import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
import Theme from '../../../utils/Theme';
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
  },
  srcWidthWrap: {
    width: width - 50,
    alignSelf: 'center',
    height: height,
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
  btnCustomStyle: {
    flexDirection: 'row',

    justifyContent: 'space-evenly',
    // margin: 5,
    marginRight: 5,
    // marginLeft: 5,
  },
  errorTxt: {
    color: 'red',
    fontSize: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  pickerWrap: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 25,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  pickerStyle: {
    height: 60,
    width: '100%',
    color: '#9CA3AF',
  },
  helpCenWrap: {
    position: 'absolute',
    bottom: ' 10%',
  },
  btnNext: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    height: 20,
    width: 20,
  },
});

export default styles;
