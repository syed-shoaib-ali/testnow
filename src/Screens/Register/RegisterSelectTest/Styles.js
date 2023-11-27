import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
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
    alignItems: Theme.align,
    paddingVertical: 5,
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
  topWrap: {
    backgroundColor: Theme.white,
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: Theme.white,
    width: '100%',
    alignSelf: Theme.align,
    height: 50,
    alignItems: Theme.align,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  viewBorderWrap: {
    borderBottomWidth: 2,
    borderColor: Theme.white,
    width: '100%',
    height: 60,
  },
  viewBorderWrap1: {
    borderBottomWidth: 1,
    borderColor: '#868686',
    width: '100%',
    height: 60,
    alignItems: Theme.align,
    justifyContent: Theme.align,
  },
  flexRowWrapPadd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Theme.padding,
  },
  flexAlign: {
    flexDirection: 'row',
    alignItems: Theme.align,
  },
  txtCheck: {
    color: Theme.lightGreen,
    fontSize: 14,
    left: Theme.left,
  },
  txtUnCheck: {
    color: '#EC7665',
    fontSize: 14,
  },
  widthSetting: {
    width: width - 60,
    alignSelf: Theme.align,
  },
  txtPillAR: {
    color: '#868686',
    fontSize: Theme.mainBtnSize,
    alignSelf: Theme.align,
    marginTop: 20,
  },
  txtOptions: {
    color: '#868686',
    fontSize: Theme.mainBtnSize,
  },
  borderBottomWrap: {
    borderBottomWidth: 1,
    borderColor: '#868686',
    width: '100%',
    paddingVertical: 10,
  },
  errorTxt: {
    color: Theme.red,
    fontSize: Theme.txtError,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  btnCutonSty: {
    flexDirection: 'row',
    alignItems: Theme.align,
  },
  wrapIndic: {
    backgroundColor: '#F1F1F1',
    paddingBottom: 20,
    paddingTop: 20,
  },
  wrapInd: {
    flex: 1,
    justifyContent: Theme.align,
    alignItems: Theme.align,
  },
  wrapSubBtn: {
    width: '100%',
    alignItems: Theme.align,
  },
  iconClose: {
    position: 'absolute',
    alignSelf: 'flex-end',
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
