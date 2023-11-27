import React, {Component} from 'react';
import {View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import styles from './Styles';
import Header from '../../../Components/Header/Header';
import bgImg from '../../../Assets/bgImg.png';
import Button from '../../../Components/Button/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
class LoginQrCode extends Component {
  render() {
    return (
      <ImageBackground style={styles.MainView} source={bgImg}>
        <Header
          isTwoRightBtn={true}
          title="Login"
          rightTitle="Register"
          disable={true}
          onPressRight={() => this.props.navigation.navigate('SignUp')}
        />
        {/* Warap all according to the screen width */}
        <KeyboardAwareScrollView>
          <View style={styles.srcWidthWrap}>
            <View style={styles.wrapBtnImg}>
              <TouchableOpacity
                style={styles.btnImgWrap}
                onPress={() => this.props.navigation.navigate('QrCodeScan')}>
                <Image
                  source={require('../../../Assets/qrCodeImg.png')}
                  style={styles.ImgQrCode}
                />
              </TouchableOpacity>
            </View>
            <Button
              label="Scan QR"
              onPress={() => this.props.navigation.navigate('QrCodeScan')}
            />
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    );
  }
}

export default LoginQrCode;
