import React from 'react';
import {View, TextInput} from 'react-native';
import PropTypes from 'prop-types';
//vector Icon
import AntDesign from 'react-native-vector-icons/AntDesign';
import Theme from '../../utils/Theme';

import styles from './Styles';
const textInput = (props) => {
  return (
    <View>
      {props.isWhite == true ? (
        <View style={[styles.viewWrapWhite, {marginTop: props.marginTop}]}>
          <TextInput
            placeholder={props.placeholder}
            style={styles.txtInput}
            placeholderTextColor={Theme.placeHolCol}
            value={props.value}
            secureTextEntry={props.password}
            onChangeText={(text) => props.onChangeText(text)}></TextInput>
        </View>
      ) : props.isLong == true ? (
        <View
          style={[
            styles.viewWrapWhite,
            {height: 100, marginTop: props.marginTop},
          ]}>
          <TextInput
            placeholder={props.placeholder}
            style={[styles.txtInput, {height: 100}]}
            placeholderTextColor={Theme.placeHolCol}
            value={props.value}
            secureTextEntry={props.password}></TextInput>
        </View>
      ) : props.flexRow == true ? (
        <View style={styles.viewWrapflex}>
          <TextInput
            placeholder={props.placeholder}
            style={styles.txtInput1}
            placeholderTextColor={Theme.placeHolCol}
            value={props.value}
            secureTextEntry={props.password}
            editable={props.edit}
            onChangeText={(text) => props.onChangeText(text)}></TextInput>
          <AntDesign
            name="down"
            size={Theme.iconSize}
            color={Theme.placeHolCol}
            onPress={props.dropdown}
          />
        </View>
      ) : props.isPassword == true ? (
        <TextInput
          placeholder={props.placeholder}
          style={styles.txtInpuisPassword}
          placeholderTextColor={Theme.placeHolCol}
          value={props.value}
          secureTextEntry={props.password}
          editable={props.edit}
          maxLength={Theme.txtLength}
          onChangeText={(text) => props.onChangeText(text)}></TextInput>
      ) : (
        <View style={styles.viewWrap}>
          <TextInput
            placeholder={props.placeholder}
            style={{width: '90%', padding: 5}}
            placeholderTextColor={Theme.placeHolCol}
            value={props.value}
            secureTextEntry={props.password}
            onChangeText={(text) => props.onChangeText(text)}></TextInput>
        </View>
      )}
    </View>
  );
};
textInput.propTypes = {
  filledColor: PropTypes.string,
  textColor: PropTypes.string,
  defaultValue: PropTypes.string,
  textStyle: PropTypes.any,
  label: PropTypes.string,
  customStyles: PropTypes.any,
  customTxtStyles: PropTypes.any,
};
textInput.defaultProps = {
  filledColor: Theme.primary,
  textColor: Theme.txtWhite,
  keyboardType: 'phone-pad',
  label: '',
};
export default textInput;
