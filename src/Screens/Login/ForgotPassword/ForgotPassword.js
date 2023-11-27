import React, {Component} from 'react';
import {View, ImageBackground, Modal} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActivityIndicator from '../../../Components/ActivityIndicator/ActivityIndicator';
import Header from '../../../Components/Header/Header';
import bgImg from '../../../Assets/bgImg.png';
import Button from '../../../Components/Button/Button';
import InputText from '../../../Components/TextInput/TextInput';
import styles from './Styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import axios from 'axios';
import Theme from '../../../utils/Theme';
import {baseURL} from '../../../apis/Apis';
import {encryptData} from '../../../apis/secure';
class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isloading: false,
      compCode: '',
    };
  }
  forgotPassword = async () => {
    this.setState({isloading: true});
    let accessToken = '8nLNssE3VEyW';
    let userName = this.state.email;
    let user = '';
    user = encryptData(userName);
    const url = baseURL + 'authentication/loginidbased/' + user;
    await axios({
      method: 'post',
      url,
      headers: {
        accessToken: accessToken,
      },
    })
      .then(async ({data}) => {
        if (data.status === 'success') {
          if (data.compCode.length > 1) {
            this.setState({isloading: false});
            alert('User is registered in multiple companies');
          } else {
            this.setState({compCode: data.compCode[0]});
            if (this.state.compCode === '') {
              alert('No Company code exist ');
            } else {
              await AsyncStorage.setItem('comapnyCode', this.state.compCode);
              this.forgotApiValid();
            }
          }
        } else {
          alert(data.message);
          this.setState({isloading: false});
        }
      })
      .catch((error) => {
        this.setState({isloading: false});
        console.log('Error=>', error);
        alert(error);
      });
  };
  forgotApiValid = async () => {
    this.setState({isloading: true});
    let accessToken = '8nLNssE3VEyW';
    const compCode = await AsyncStorage.getItem('comapnyCode');
    const url = baseURL + 'forgetPassword/' + compCode;
    const data = {
      loginId: this.state.email,
      sendMail: 'true',
      sendSMS: 'false',
    };
    await axios({
      method: 'POST',
      data,
      url,
      headers: {
        accessToken: accessToken,
      },
    })
      .then(async ({data}) => {
        console.log('Data in Forgot=>', data);
        this.setState({isloading: false});
        alert(data.status);
        // alert('User Not Found');
      })
      .catch((error) => {
        this.setState({isloading: false});
        console.log(error);
        alert(error);
      });
  };
  render() {
    return (
      <ImageBackground style={styles.MainView} source={bgImg}>
        {/* Warap all according to the screen width */}
        <KeyboardAwareScrollView>
          <View style={styles.srcWidthWrap}>
            <Header
              title="Forgot password?"
              login="Login"
              onPressRight={() => this.props.navigation.navigate('LoginScreen')}
            />
            <InputText
              placeholder="Enter Login ID"
              maxLength={Theme.txtLength}
              onChangeText={(email) => this.setState({email})}
              editable
            />
            <Button
              onPress={this.forgotPassword}
              label="Reset"
              customStyles={styles.btnReset}
            />
          </View>
        </KeyboardAwareScrollView>
        {this.state.isloading === true ? (
          <Modal animationType="fade" transparent={true}>
            <View style={styles.wrapIndicat}>
              <ActivityIndicator />
            </View>
          </Modal>
        ) : null}
      </ImageBackground>
    );
  }
}

export default ForgotPassword;
