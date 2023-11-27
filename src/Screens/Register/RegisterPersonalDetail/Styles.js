import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
import Theme from '../../../utils/Theme';

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
  },
  srcWidthWrap: {
    width: Theme.setWidth,
    alignSelf: Theme.align,
    height: height,
  },
  btnCutonSty: {
    flexDirection: 'row',
    alignItems: Theme.align,
  },
  termConditionWrap: {
    flexDirection: 'row',
    marginTop: 20,
    right: 5,
  },
  txtTerm: {
    fontSize: 14,
    color: Theme.darkGrey,
  },
  txtUnderLine: {
    textDecorationLine: 'underline',
  },
  flexRowWrap: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: Theme.align,
  },
  VerLine: {
    width: '40%',
    borderTopWidth: 1,
    borderColor: '#C7C7C7',
  },
  txtOr: {
    fontSize: Theme.mainBtnSize,
    color: Theme.darkGrey,
  },
  btnCustomStyle: {
    flexDirection: 'row',

    justifyContent: 'space-evenly',
    marginRight: 5,
  },
  errorTxt: {
    color: Theme.red,
    fontSize: Theme.errorTxt,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  pickerWrap: {
    backgroundColor: Theme.white,
    borderRadius: 10,
    marginTop: 5,
    alignItems: Theme.align,
    paddingHorizontal: 10,
  },
  pickerStyle: {
    height: 60,
    width: '100%',
    color: Theme.placeHolCol,
  },
  helpCenWrap: {
    position: 'absolute',
    bottom: ' 10%',
  },
  btnNext: {
    flexDirection: 'row',
    alignItems: Theme.align,
  },
  iconStyle: {
    height: 20,
    width: 20,
  },
});

export default styles;
