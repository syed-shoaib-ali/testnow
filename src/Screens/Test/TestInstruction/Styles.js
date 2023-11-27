import {ThemeProvider} from '@react-navigation/native';
import {StyleSheet, Dimensions} from 'react-native';
import Theme from '../../../utils/Theme';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
  },
  flexMargin: {
    flexDirection: 'row',
    marginTop: 10,
  },
  srcWidthWrap: {
    width: Theme.setWidth,
    alignSelf: Theme.align,
    paddingVertical: Theme.padding,
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
  flexRow: {
    flexDirection: 'row',
    paddingVertical: Theme.padding,
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
    fontSize: Theme.mainBtnSize,
    color: Theme.txtWhite,
  },
  txtSecurity: {
    color: Theme.primary,
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
});

export default styles;
