import {StyleSheet, Dimensions, Platform} from 'react-native';
const {width} = Dimensions.get('window');
import Theme from '../../../utils/Theme';

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    marginBottom: '40%',
  },
  srcWidthWrap: {
    width: Theme.setWidth,
    alignSelf: Theme.align,
    paddingVertical: Theme.padding,
  },
  btnCuston: {
    flexDirection: 'row',
    alignItems: Theme.align,
  },
  bgWhiteWrap: {
    backgroundColor: Theme.white,
  },
  txtParagraph: {
    fontSize: 14,
    color: '#1C1C1C',
    textAlign: 'justify',
    top: 5,
  },
  wrapChecBox1: {
    borderWidth: Platform.OS === 'ios' ? 1 : 0,
    width: 34,
    height: 34,
    alignItems: Theme.align,
    marginTop: 5,
    justifyContent: 'flex-start',
  },
  flexRow: {
    flexDirection: 'row',
    paddingVertical: Theme.padding,
    width: '100%',
  },
  bgBlackWrap: {
    backgroundColor: '#4C4C4C',
    alignItems: Theme.align,
    paddingBottom: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  txtTerms: {
    fontSize: Theme.txtError,
    color: Theme.txtWhite,
  },
  txtSecurity: {
    color: '#34D399',
    fontWeight: Theme.bold,
    fontSize: Theme.mainBtnSize,
    marginTop: 10,
  },
  smallView: {
    backgroundColor: Theme.lightGreen,
    alignItems: Theme.align,
    justifyContent: Theme.align,
    height: 30,
    width: 30,
  },
  txtInsideSmall: {
    left: Theme.left,
    fontSize: 14,
    fontWeight: Theme.bold,
    alignSelf: Theme.align,
  },
  txtNumber: {
    fontSize: Theme.smallTxt,
    fontWeight: Theme.bold,
    color: Theme.txtWhite,
  },
  viewWrapClock: {
    flexDirection: 'row',
    alignItems: Theme.align,
    justifyContent: Theme.align,
    paddingVertical: 20,
    backgroundColor: '#FF714D',
  },
  txtWaitTime: {
    fontSize: Theme.mainBtnSize,
    color: Theme.txtWhite,
  },
  timeLabelStyle: {
    color: Theme.primary,
    fontWeight: Theme.bold,
  },
  flexRowWrap: {
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default styles;
