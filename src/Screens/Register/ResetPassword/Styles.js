import {StyleSheet, Dimensions} from 'react-native';

import Theme from '../../../utils/Theme';
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    justifyContent: Theme.align,
  },
  btncustomStyles: {
    flexDirection: 'row',
    alignItems: Theme.align,
  },
  srcWidthWrap: {
    width: Theme.setWidth,
    alignSelf: Theme.align,
  },
  txtCongo: {
    color: Theme.lightGreen,
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: Theme.align,
    paddingVertical: 5,
  },
  txtLogin: {
    color: '#111827',
    fontSize: Theme.txtHeighest,
    fontWeight: 'normal',
    paddingVertical: 30,
    alignSelf: Theme.align,
  },
  imgIconTick: {
    width: Theme.wp('25%'),
    height: Theme.wp('25%'),
    alignSelf: Theme.align,
    margin: 20,
  },
});

export default styles;
