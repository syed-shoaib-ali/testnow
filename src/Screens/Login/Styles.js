import {StyleSheet, Dimensions} from 'react-native';
import Theme from '../../utils/Theme';

const styles = StyleSheet.create({
  MainView: {
    backgroundColor: Theme.white,
    flex: 1,
  },
  srcWidthWrap: {
    width: Theme.setWidth,
    alignSelf: Theme.align,
  },
  btnWrap: {
    flexDirection: 'row',
    alignItems: Theme.align,
    backgroundColor: Theme.lightOrange,
    borderRadius: Theme.btn_Radius,
    height: 55,
    justifyContent: Theme.align,
  },
  txtOr: {
    fontSize: 14,
    color: Theme.txtBlack,
    alignSelf: Theme.align,
  },
  txtLoginQr: {
    fontSize: Theme.mainBtnSize,
    alignSelf: Theme.align,
    left: '10%',
    color: Theme.txtWhite,
    fontWeight: Theme.bold,
  },

  errorTxt: {
    color: Theme.red,
    fontSize: Theme.errTxt,
    paddingHorizontal: 10,
  },
  imgQr: {
    height: 20,
    width: 20,
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
