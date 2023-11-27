import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

import Theme from '../../utils/Theme';

const styles = StyleSheet.create({
  viewWrapAll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    paddingVertical: Theme.padding,
  },
  iconClose: {
    color: Theme.iconGrey,
    right: Theme.right,
  },
  wrapisInSequence: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Theme.padding,
    backgroundColor: Theme.lightOrange,
    paddingHorizontal: Theme.padding,
  },
  paddingWrap: {
    paddingVertical: Theme.padding,
    paddingHorizontal: Theme.padding,
  },
  txtGreen: {
    fontSize: Theme.mainBtnSize,
    color: Theme.lightGreen,
    fontWeight: '800',
  },
  txtTitle: {
    fontSize: 20,
    color: Theme.txtBlack,
    fontWeight: Theme.bold,
  },
  viewflexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtRegister: {
    fontSize: Theme.txtHeighest,
    color: Theme.txtBlack,
    left: 25,
    fontWeight: '800',
  },
  titleGreen: {
    fontSize: Theme.txtHeighest,
    color: Theme.lightGreen,
  },
  flexAlign: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TopTwoWrap: {
    paddingVertical: Theme.padding,
    alignSelf: 'flex-end',
    width: width / 2 + 60,
  },
  subtwoWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  txtLogin: {
    fontSize: Theme.txtHeighest,
    color: Theme.black,
    fontWeight: '800',
  },
  paddingWrap: {
    paddingVertical: Theme.padding,
  },
});

export default styles;
