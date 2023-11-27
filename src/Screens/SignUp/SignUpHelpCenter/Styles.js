import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Theme from '../../../utils/Theme';
const styles = StyleSheet.create({
  MainView: {
    backgroundColor: '#fff',
    flex: 1,
  },
  srcWidthWrap: {
    width: width - 50,
    alignSelf: 'center',
    // paddingVertical: 20,
    flex: 1,
  },
  headerWrap: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
  },
  txtBack: {
    fontSize: 16,
    color: '#5DB075',
  },
  txtMsg: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '600',
  },
  boxCardWrap: {
    width: width - 100,
    height: height / 3 + 10,
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    fontWeight: '600',
    margin: 20,
  },
  txtTalk: {
    fontSize: 20,
    color: '#000000',
  },
  txtSupport: {
    fontSize: 14,
    color: '#5A5A5A',
    marginTop: 10,
  },
  imgPhIcon: {
    height: hp('8%'),
    width: wp('18%'),
    marginTop: 20,
  },
  txtMakeCall: {
    fontSize: 13,
    color: '#ffffff',
    fontWeight: '600',
  },
  MakeCalWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#34D399',
    width: wp('60%'),
    height: hp('5%'),
    borderRadius: 30,
    marginTop: 30,
  },
});

export default styles;
