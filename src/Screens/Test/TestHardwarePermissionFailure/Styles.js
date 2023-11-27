import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
import Theme from '../../../utils/Theme';

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    marginBottom: 10,
  },
  srcWidthWrap: {
    width: Theme.setWidth,
    alignSelf: Theme.align,
    marginTop: 20,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  topWrap: {
    backgroundColor: Theme.white,
    paddingVertical: Theme.padding,
    alignItems: Theme.align,
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    width: Theme.setWidth,
    alignSelf: Theme.align,
    height: 50,
    alignItems: Theme.align,
    paddingHorizontal: Theme.padding,
    borderRadius: 10,
  },
  headerWrap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    alignItems: Theme.align,
  },
  txtMcqs: {
    color: '#111827',
    fontSize: Theme.mainBtnSize,
    fontWeight: '600',
  },
  txtTestDetail: {
    color: '#6B7280',
    fontSize: Theme.smallTxt,
  },
  txtLoremIpsum: {
    color: Theme.txtBlack,
    alignSelf: Theme.align,
    fontSize: Theme.mainBtnSize,
  },

  txtTitle: {
    color: '#111827',
    fontSize: Theme.mainBtnSize,
    fontWeight: '600',
  },
  txtMicroPhone: {
    fontSize: Theme.smallTxt,
    color: '#111827',
    fontWeight: '900',
  },
  micImg: {
    height: 22,
    width: 16,
  },
  cautionImg: {
    height: 20,
    width: 23,
  },
  txtAllowAccess: {
    color: '#DC2626',
    fontSize: Theme.smallTxt,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: Theme.align,
    padding: 10,
  },
  txtSubTitle: {
    color: '#374151',
    fontSize: Theme.smallTxt,
  },
  internetIcon: {
    width: 22,
    height: 22,
  },
});

export default styles;
