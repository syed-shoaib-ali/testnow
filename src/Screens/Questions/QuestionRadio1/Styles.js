import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import Theme from '../../../utils/Theme';

const styles = StyleSheet.create({
  MainView: {
    backgroundColor: Theme.white,
    flex: 1,
  },
  wrapTopOrd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtIndex: {
    fontWeight: Theme.bold,
    fontSize: Theme.smallTxt,
  },
  wrapTopCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewWrapHei: {
    backgroundColor: Theme.white,
    height: 300,
  },
  srcWidthWrap: {
    width: width - 50,
    alignSelf: Theme.align,
    // paddingVertical: 20,
    flex: 1,
  },
  headerWrap: {
    paddingHorizontal: Theme.padding,
    paddingVertical: Theme.padding,
    alignItems: 'flex-end',
  },

  boxWrap: {
    height: 40,
    width: '47%',
    borderRadius: 10,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: Theme.align,
  },
  txtAutoNext: {
    color: Theme.txtBlack,
    fontSize: Theme.smallTxt,
    marginLeft: -15,
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
  txtAnswetList: {
    color: '#374151',
    fontSize: Theme.smallTxt,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  txtAnswer: {
    color: '#374151',
    fontSize: Theme.smallTxt,
  },
  flexRowWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circleWrap: {
    backgroundColor: '#34D399',
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
  flag: {
    height: 43,
    width: '12.5%',
    margin: '2.08%',
    alignItems: Theme.align,
    justifyContent: Theme.align,
  },
  flagWrap: {
    paddingVertical: 10,
    width: '90%',
    alignSelf: Theme.align,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  txtSection: {
    fontWeight: Theme.bold,
    alignSelf: Theme.align,
    fontSize: Theme.txtHeighest,
    marginTop: '5%',
    color: Theme.grey,
    marginBottom: 15,
  },
  titleQues: {
    fontSize: Theme.mainBtnSize,
    fontWeight: Theme.bold,
    marginTop: '2%',
    paddingLeft: '3%',
    margin: 3,
    color: 'grey',
    textAlign: Theme.align,
  },
  iconClose: {
    position: 'absolute',
    alignSelf: 'flex-end',
    margin: '2%',
  },
});

export default styles;
