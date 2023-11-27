import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
import Theme from '../../../utils/Theme';

const styles = StyleSheet.create({
  MainView: {
    backgroundColor: '#fff',
    flex: 1,
  },
  srcWidthWrap: {
    width: width - 50,
    alignSelf: 'center',
    paddingVertical: 20,
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

  flexRowWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
  },

  txtQuestion: {
    fontSize: 15,
    color: '#000000',
  },
  txtNotSatisfied: {
    alignSelf: 'center',
    color: '#2F61B6',
    fontSize: 16,
    paddingVertical: '30%',
  },
  modalQueTxt: {
    fontSize: 15,
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  viewbgColSet: {
    backgroundColor: '#fafafa',
  },
  widthQue: {
    width: '90%',
  },
});

export default styles;
