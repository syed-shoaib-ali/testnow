import React, {Component} from 'react';
import {TouchableOpacity, Text, Image, View, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
const {width} = Dimensions.get('window');
import Theme from '../../utils/Theme';
import {ActivityIndicator} from 'react-native-paper';
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      loading,
      onPress,
      label,
      icon,
      size,
      filledColor,
      textColor,
      customStyles,
      customTxtStyles,
      defaultValue,
      textStyle,
      borderSize,
      isIcon,
      ...textProps
    } = this.props;

    const buttonStyle = [
      styles.buttonFilled,
      customStyles,
      size === 'social'
        ? {
            width: 50,
            borderRadius: 50,
            height: 50,
          }
        : size === 'sm'
        ? {
            width: width / 4,
          }
        : size === 'smSquare'
        ? {
            width: width / 4 + 30,
            height: 45,
          }
        : size === 'md'
        ? {
            width: width / 2 - 30,
          }
        : {
            width: width - 60,
          },
    ];

    buttonStyle.push({backgroundColor: filledColor});
    buttonStyle.push({borderWidth: borderSize});

    const txtStyle = [styles.txtBtnFilled, customTxtStyles, {color: textColor}];
    return (
      <View>
        {this.props.isIcon == true ? (
          <View style={{marginVertical: 10}}>
            <TouchableOpacity style={buttonStyle} onPress={onPress}>
              <Text style={txtStyle}>{label}</Text>
              <AntDesign
                // name="arrowright"
                name={this.props.check ? 'check' : 'arrowright'}
                size={Theme.iconSize}
                style={{color: Theme.white, left: Theme.left}}
              />
            </TouchableOpacity>
          </View>
        ) : this.props.isIconRight == true ? (
          <View>
            <TouchableOpacity
              style={[
                buttonStyle,
                {flexDirection: 'row', justifyContent: Theme.align},
              ]}
              onPress={onPress}>
              <Image
                source={this.props.IconName}
                style={this.props.IconStyle}
              />
              <Text style={styles.txtLabel}>{label}</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity
              style={buttonStyle}
              onPress={onPress}
              disabled={this.props.disable || loading}>
              {loading ? (
                <ActivityIndicator color="white" size={20} />
              ) : (
                <Text style={txtStyle}>{label}</Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

Button.propTypes = {
  filledColor: PropTypes.string,
  textColor: PropTypes.string,
  defaultValue: PropTypes.string,
  textStyle: PropTypes.any,
  label: PropTypes.string,
  customStyles: PropTypes.any,
  customTxtStyles: PropTypes.any,
  borderSize: PropTypes.number,
};

Button.defaultProps = {
  filledColor: Theme.primary,
  textColor: Theme.txtWhite,
  defaultValue: '',
  textStyle: {},
  icon: null,
  label: '',
  customStyles: {},
  customTxtStyles: {},
  borderSize: 0,
};

export default Button;
