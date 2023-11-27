import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Theme from '../../utils/Theme';
const styles = StyleSheet.create({
  viewWrap: {
    backgroundColor: '#F3F4F6',
    width: '100%',
    borderRadius: 10,
    height: 60,
    marginTop: 10,
    padding: 10,
  },
  viewWrapWhite: {
    backgroundColor: '#F3F4F6',
    width: '100%',
    borderRadius: 10,
    height: 50,
    marginTop: 5,
  },
  txtInput: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    height: 60,
    padding: 20,
  },
  txtInput1: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    height: 60,
    padding: 10,
  },
  viewWrapflex: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    height: 60,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  txtInpuisPassword: {
    // backgroundColor: 'red',
    width: 200,
  },
});

export default styles;
