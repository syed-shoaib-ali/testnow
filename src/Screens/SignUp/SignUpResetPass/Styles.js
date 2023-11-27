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
  },
  srcWidthWrap: {
    width: width - 50,
    alignSelf: 'center',
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  VerLine: {
    width: '40%',
    borderTopWidth: 1,
    borderColor: '#C7C7C7',
  },
  txtMsg: {
    fontSize: 20,
    color: '#111827',
    fontWeight: '600',
    left: 20,
  },
  btnCustomStyle: {
    flexDirection: 'row',

    justifyContent: 'space-evenly',
    // margin: 5,
    marginRight: 5,
    // marginLeft: 5,
  },
  headerWrap: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  codeImg: {
    height: hp('8%'),
    width: wp('30'),
  },
  txtPleaseEnter: {
    color: '#838383',
    fontSize: 16,
    fontWeight: '600',
  },
  txtGreen: {
    fontSize: 16,
    color: '#059669',
    alignSelf: 'center',
    paddingVertical: 20,
  },
  txtNotSatisfied: {
    alignSelf: 'center',
    color: '#2F61B6',
    fontSize: 16,
    // paddingVertical: '30%',
    bottom: '10%',
  },
});

export default styles;
