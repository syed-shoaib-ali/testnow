import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import bgImg from '../../../Assets/bgImg.png';
import styles from './Styles';
import Header from '../../../Components/Header/Header';
import InputText from '../../../Components/TextInput/TextInput';
import Button from '../../../Components/Button/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import AsyncStorage from '@react-native-async-storage/async-storage';
import helpIcon from '../../../Assets/helpIcon.png';
import Theme from '../../../utils/Theme';
import {Formik} from 'formik';
import * as yup from 'yup';
const reviewSchema = yup.object({
  loginId: yup
    .string() // entry must be a string
    .required('login Id cannot be empty!'), // Field must required
  confirmLoginId: yup
    .string()
    .required('Confirm login Id cannot be empty!')
    .oneOf([yup.ref('loginId')], 'login Id do not match'),
  password: yup.string().required('Password cannot be empty!').min(4),

  confirmPassword: yup
    .string()
    .required('Confirm Password cannot be empty!')
    .min(4)
    .oneOf([yup.ref('password')], 'Passwords do not match'),
});

class RegisterLoginDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginId: '',
      confirmLoginId: '',
      password: '',
      confirmPassword: '',
    };
  }
  saveData = () => {
    AsyncStorage.setItem('loginId', this.state.loginId);
    AsyncStorage.setItem('confirmLoginId', this.state.confirmLoginId);
    AsyncStorage.setItem('password', this.state.password);
    AsyncStorage.setItem('confirmPassword', this.state.confirmPassword);
    this.props.navigation.navigate('RegisterPersonalDetail');
  };
  render() {
    return (
      <ImageBackground style={styles.MainView} source={bgImg}>
        <KeyboardAwareScrollView>
          <View style={styles.srcWidthWrap}>
            <Header
              isThreeComponent={true}
              register="Register"
              title="Login Details"
              onPressLeft={() => this.props.navigation.goBack()}
            />
            <Formik
              initialValues={{
                loginId: this.state.loginId,
                confirmLoginId: this.state.confirmLoginId,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword,
              }}
              validationSchema={reviewSchema} //check validation
              onSubmit={(values) => {
                this.setState({
                  loginId: values.loginId,
                  confirmLoginId: values.confirmLoginId,
                  password: values.password,
                  confirmPassword: values.confirmPassword,
                });
                this.saveData();
              }}>
              {(props) => (
                <View style={styles.srcWidthWrap}>
                  <View>
                    <InputText
                      {...this.props}
                      placeholder="Login Id"
                      maxLength={30}
                      onChangeText={props.handleChange('loginId')}
                      editable
                      isWhite={true}
                    />
                    <Text style={styles.errorTxt}>
                      {props.touched.loginId && props.errors.loginId}
                    </Text>
                  </View>
                  <View>
                    <InputText
                      {...this.props}
                      placeholder="Confirm Login Id"
                      maxLength={30}
                      onChangeText={props.handleChange('confirmLoginId')}
                      editable
                      isWhite={true}
                    />
                    <Text style={styles.errorTxt}>
                      {props.touched.confirmLoginId &&
                        props.errors.confirmLoginId}
                    </Text>
                  </View>
                  <View>
                    <InputText
                      {...this.props}
                      placeholder="Password"
                      editable
                      maxLength={30}
                      password={true}
                      secureTextEntry={true}
                      isWhite={true}
                      onChangeText={props.handleChange('password')}
                    />
                    <Text style={styles.errorTxt}>
                      {props.touched.password && props.errors.password}
                    </Text>
                  </View>
                  <View>
                    <InputText
                      {...this.props}
                      placeholder="Confirm Password"
                      editable
                      maxLength={Theme.txtLength}
                      password={true}
                      isWhite={true}
                      secureTextEntry={true}
                      onChangeText={props.handleChange('confirmPassword')}
                    />
                    <Text style={styles.errorTxt}>
                      {props.touched.confirmPassword &&
                        props.errors.confirmPassword}
                    </Text>
                  </View>
                  <Button
                    label="Next"
                    isIcon={true}
                    customStyles={styles.btnCutonSty}
                    onPress={props.handleSubmit}
                  />
                  <View style={styles.helpCenWrap}>
                    <Button
                      isIconRight={true}
                      IconName={helpIcon}
                      label="Help Center"
                      IconStyle={styles.iconStyle}
                      customStyles={styles.btnCustomStyle}
                      onPress={() =>
                        this.props.navigation.navigate('SignUpHelpCenter')
                      }
                    />
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    );
  }
}

export default RegisterLoginDetail;
