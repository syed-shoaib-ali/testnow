import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Theme from '../../utils/Theme';
const styles = StyleSheet.create({
  buttonFilled: {
    backgroundColor: '#34D399',
    justifyContent: Theme.align,
    alignItems: Theme.align,
    height: (height - 20) / 14,
    borderRadius: 30,
    marginVertical: 30,
  },
  txtBtnFilled: {
    fontSize: Theme.mainBtnSize,
    textAlign: Theme.align,
    color: Theme.txtBlack,
    opacity: 1,
    fontWeight: Theme.bold,
  },
  iconBtnFilled: {
    height: 28,
    width: 26,
    resizeMode: 'contain',
  },
  btnLarge: {
    width: width - 90,
  },
  socialImg: {
    height: hp('3%'),
    width: wp('3%'),
  },
  btnFlex: {
    flexDirection: 'row',
    justifyContent: Theme.align,
  },
  txtLabel: {
    fontSize: 15,
    color: Theme.txtWhite,
    fontWeight: Theme.bold,
    left: Theme.left,
  },
});
export default styles;
