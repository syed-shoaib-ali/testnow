import React, {Component} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import bgImg from '../../../Assets/bgImg.png';
import styles from './Styles';
import iconTick from '../../../Assets/iconTick.png';
import Button from '../../../Components/Button/Button';

class SignUpResetPassword extends Component {
  render() {
    return (
      <ImageBackground style={styles.MainView} source={bgImg}>
        {/* Warap all according to the screen width */}
        <View style={styles.srcWidthWrap}>
          <Image source={iconTick} style={styles.imgIconTick} />
          <Text style={styles.txtCongo}>Your query will be responded</Text>
          <Text style={styles.txtCongo}>shortly.</Text>
          <Button
            label="Close"
            customStyles={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => this.props.navigation.navigate('LoginScreen')}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default SignUpResetPassword;
