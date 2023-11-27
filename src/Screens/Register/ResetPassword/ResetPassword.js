import React, {Component} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import bgImg from '../../../Assets/bgImg.png';
import styles from './Styles';
import iconTick from '../../../Assets/iconTick.png';
import Button from '../../../Components/Button/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginId: '',
    };
  }
  async componentDidMount() {
    const LoginId = await AsyncStorage.getItem('loginId');
    console.log(LoginId);
    this.setState({LoginId: LoginId});
  }
  render() {
    return (
      <ImageBackground style={styles.MainView} source={bgImg}>
        {/* Warap all according to the screen width */}
        <View style={styles.srcWidthWrap}>
          <Image source={iconTick} style={styles.imgIconTick} />
          <Text style={styles.txtCongo}>Congratulations !</Text>
          <Text style={styles.txtCongo}>You have successfully registered.</Text>
          <Text style={styles.txtLogin}>{this.state.LoginId}</Text>
          <Button
            label="Login"
            customStyles={styles.btncustomStyles}
            onPress={() => this.props.navigation.navigate('LoginScreen')}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default ResetPassword;
