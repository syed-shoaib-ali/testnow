import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import Theme from '../../utils/Theme';

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: Theme.primary,
    alignItems: Theme.align,
    justifyContent: Theme.align,
  },
  btnCenter: {
    alignSelf: Theme.align,
    alignItems: Theme.align,
  },
  mainLogoImg: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    margin: '10%',
  },
  srcWidthWrap: {
    width: width - 30,
    alignSelf: Theme.align,
    backgroundColor: Theme.white,
    alignItems: Theme.align,
    borderRadius: Theme.btnRadius,
    padding: 4,
  },
  flexRow: {
    flexDirection: 'row',
    paddingVertical: '1%',
    alignSelf: Theme.align,
  },
  sizeImg: {
    height: 30,
    width: 30,
    margin: 5,
  },
  feedBack: {
    color: Theme.black,
    fontWeight: '600',
    textAlign: Theme.align,
    fontSize: 30,
    paddingVertical: 10,
  },
  txtParagraph: {
    fontSize: Theme.mainBtnSize,

    color: Theme.lightGrey,
    textAlign: Theme.align,
  },
  txtGreen: {
    color: '#5DB075',
    fontSize: Theme.mainBtnSize,
  },
  txtQuestion: {
    fontSize: Theme.mainBtnSize,
    color: Theme.txtBlack,
    textAlign: Theme.align,
  },
  txtOr: {color: Theme.grey, fontSize: Theme.smallTxt},
  txtBtnWrap: {
    alignItems: Theme.align,
    paddingTop: '20%',
  },
});

export default styles;
