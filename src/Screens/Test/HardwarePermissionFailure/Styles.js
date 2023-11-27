import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import Theme from '../../../utils/Theme';

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
  },
  flexMargin: {
    flexDirection: 'row',
    marginTop: 10,
  },
  btnCustom: {
    flexDirection: 'row',
    alignItems: Theme.align,
  },
  srcWidthWrap: {
    width: Theme.setWidth,
    alignSelf: Theme.align,
    paddingVertical: Theme.padding,
  },
  bgWhiteWrap: {
    backgroundColor: Theme.lightGreen,
  },
  txtParagraph: {
    fontSize: Theme.smallTxt,
    color: Theme.txtWhite,
    textAlign: 'justify',
    top: 5,
  },
  flexRow: {
    flexDirection: 'row',
    paddingVertical: Theme.padding,
  },
  bgBlackWrap: {
    backgroundColor: '#4C4C4C',
    alignItems: Theme.align,
    paddingBottom: 10,
  },
  txtTerms: {
    fontSize: Theme.mainBtnSize,
    color: Theme.txtWhite,
  },
  txtSecurity: {
    color: Theme.txtWhite,
    fontWeight: Theme.bold,
    fontSize: Theme.mainBtnSize,
    marginTop: 10,
  },
  smallView: {
    backgroundColor: '#7FD895',
    alignItems: Theme.align,
    justifyContent: Theme.align,
    height: 30,
    width: 30,
  },
  txtInsideSmall: {
    left: Theme.left,
    fontSize: Theme.smallTxt,
    fontWeight: Theme.bold,
    alignSelf: Theme.align,
    color: Theme.txtWhite,
  },
  txtNumber: {
    fontSize: 12,
    fontWeight: Theme.bold,
    color: Theme.txtWhite,
  },
});

export default styles;
