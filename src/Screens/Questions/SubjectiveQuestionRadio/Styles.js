import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Theme from '../../../utils/Theme';
const styles = StyleSheet.create({
  MainView: {
    backgroundColor: Theme.white,
    flex: 1,
  },
  imgPen: {
    height: 15,
    width: 15,
  },
  srcWidthWrap: {
    width: Theme.setWidth,
    alignSelf: Theme.align,
    paddingVertical: Theme.padding,
    flex: 1,
    // backgroundColor: 'yellow',
  },
  headerWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Theme.padding,
    paddingVertical: Theme.padding,
    alignItems: Theme.align,
    borderBottomWidth: 5,
    borderColor: '#F1F6F9',
  },
  circleCard: {
    height: Theme.wp('10%'),
    width: Theme.wp('10%'),
    borderRadius: 50,
    elevation: 5,
  },
  capsuleImg: {
    height: Theme.hp('4%'),
    width: Theme.wp('22%'),
    alignItems: Theme.align,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  time: {
    color: Theme.white,
    fontSize: Theme.smallTxt,
  },
  txtMCQ: {
    fontSize: Theme.smallTxt,
    color: Theme.lightGreen,
    fontWeight: Theme.bold,
  },
  txtmcqsQues: {
    fontSize: Theme.mainBtnSize,
    color: '#6C6C6C',
    paddingVertical: Theme.padding,
  },
  wrapQuestion: {
    borderBottomWidth: 1,
    color: '#DCE0E5',
    width: '100%',
    alignSelf: Theme.align,
  },

  GreenBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  circleWrap: {
    backgroundColor: Theme.primary,
    height: 60,
    width: 60,
    borderRadius: 50,
    alignItems: Theme.align,
    justifyContent: Theme.align,
  },
  txtEndTest: {
    fontSize: Theme.smallTxt,
    color: Theme.txtWhite,
  },
  EndTestWrap: {
    backgroundColor: '#C23939',
    height: 50,
    width: '30%',
    borderRadius: 50,
    alignItems: Theme.align,
    justifyContent: Theme.align,
  },
  ChatWithProctor: {
    backgroundColor: '#C23939',
    height: 50,
    width: '68%',
    borderRadius: 50,
    alignItems: Theme.align,
    justifyContent: Theme.align,
  },
  IconImgWrap: {
    backgroundColor: Theme.lightGrey,
    width: '100%',
    height: 60,
    borderRadius: 30,
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 30,
    alignItems: Theme.align,
  },
  imgBtn: {
    backgroundColor: Theme.white,
    borderRadius: 50,
    alignItems: Theme.align,
    justifyContent: Theme.align,
    height: 35,
    width: 35,
  },
  txtCaption: {
    color: '#374151',
    fontSize: Theme.smallTxt,
    paddingHorizontal: '5%',
  },
  absView: {
    bottom: 0,
    position: 'absolute',
  },
});

export default styles;
