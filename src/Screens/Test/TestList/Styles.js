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
    width: width - 50,
    alignSelf: Theme.align,
    marginTop: 20,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  topWrap: {
    backgroundColor: Theme.white,
    paddingVertical: Theme.padding,
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
    width: '70%',
    textAlign: Theme.align,
  },
  txtTestAssign: {
    fontSize: 14,
  },
  subHeaderWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: Theme.align,
    paddingHorizontal: 20,
    paddingVertical: 10,
    top: 10,
  },
  bottomLine: {
    borderBottomWidth: 1,
    borderColor: '#F0F2F4',
    width: '90%',
    alignSelf: Theme.align,
    paddingVertical: 10,
  },
  txtTestAssign: {
    color: '#6B7280',
    fontSize: 14,
    fontWeight: '600',
  },
  startTestWrap: {
    width: '100%',
    backgroundColor: '#52AD70',
    flexDirection: 'row',
    height: 50,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: Theme.align,
    paddingHorizontal: Theme.padding,
  },
  txtStartTest: {
    fontSize: 14,
    color: Theme.white,
    left: 20,
  },
  yetToStartWrap: {
    width: '100%',
    // backgroundColor: '#FFAD45',
    flexDirection: 'row',
    height: 50,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: Theme.align,
    // paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  txt5Days: {
    fontSize: 14,
    color: Theme.white,
  },
  rotateIcon: {
    width: 24,
    height: 24,
  },
  fileIcon: {
    width: 34,
    height: 34,
  },
  imageIcon: {
    height: 24,
    width: 24,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: Theme.align,
  },
  wrapIndi: {
    alignItems: Theme.align,
    justifyContent: Theme.align,
    marginTop: '90%',
  },
  wrapIndicat: {
    flex: 1,
    opacity: 0.5,
    backgroundColor: Theme.black,
    width: '100%',
    justifyContent: Theme.align,
  },
});

export default styles;
