import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Theme from '../../../utils/Theme';
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    justifyContent: 'center',
  },
  srcWidthWrap: {
    width: width - 50,
    alignSelf: 'center',
  },
  txtCongo: {
    color: '#059669',
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: 'center',
    paddingVertical: 5,
  },
  txtLogin: {
    color: '#111827',
    fontSize: 20,
    fontWeight: 'normal',
    paddingVertical: 30,
    alignSelf: 'center',
  },
  imgIconTick: {
    width: wp('25%'),
    height: wp('25%'),
    alignSelf: 'center',
    margin: 20,
  },
});

export default styles;
