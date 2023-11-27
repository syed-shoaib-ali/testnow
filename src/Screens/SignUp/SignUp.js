import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './Styles';
import Header from '../../Components/Header/Header';
import InputText from '../../Components/TextInput/TextInput';
import Button from '../../Components/Button/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {Checkbox} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import {Formik} from 'formik';
import * as yup from 'yup';
import {auth, firebase} from '../../../App';
import {GoogleSignin} from '@react-native-community/google-signin';

const reviewSchema = yup.object({
  email: yup
    .string() // entry must be a string
    .required('Email cannot be empty!'), // Field must required
  name: yup
    .string() // entry must be a string
    .required('Name cannot be empty!'), // Field must required
  password: yup.string().required('Password cannot be empty!').min(4),
});

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      icEye: 'eye-with-line',
      showPassword: true,
      termChecked: false,
      productChecked: false,
      name: '',
      email: '',
      password: '',
    };
  }
  googleSignin = async () => {
    try {
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);

      console.log(googleCredential);
      const user = firebase.auth().currentUser;
      if (user) {
        console.warn('User uid: ', user.uid);
        console.warn('User email: ', user.email);
      }
      // this.props.navigation.navigate('TestList');
    } catch (error) {
      console.log(error);
    }
  };

  signupData = () => {
    AsyncStorage.setItem('name', this.state.name);
    AsyncStorage.setItem('email', this.state.email);
    AsyncStorage.setItem('password', this.state.password);

    alert('Work is in under processing');
  };
  eyeIconFun = () => {
    this.setState({showPassword: !this.state.showPassword});
    if (this.state.showPassword === true) {
      this.setState({icEye: 'eye'});
    } else {
      this.setState({icEye: 'eye-with-line'});
    }
  };
  render() {
    return (
      <View style={styles.MainView}>
        <Header
          isFourComponent={true}
          register="Register"
          title="Sign Up"
          login="Login"
          onPressRight={() => this.props.navigation.navigate('LoginScreen')}
          onPressLeft={() =>
            this.props.navigation.navigate('RegisterLoginDetail')
          }
        />
        <Formik
          initialValues={{
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
          }}
          validationSchema={reviewSchema} //check validation
          onSubmit={(values, actions) => {
            this.setState({
              name: values.name,
              email: values.email,
              password: values.password,
            });
            this.signupData();
          }}>
          {(props) => (
            <KeyboardAwareScrollView>
              <View style={styles.srcWidthWrap}>
                <View>
                  <InputText
                    {...this.props}
                    placeholder="Name"
                    maxLength={30}
                    onChangeText={props.handleChange('name')}
                    editable
                  />
                  <Text style={styles.errorTxt}>
                    {props.touched.name && props.errors.name}
                  </Text>
                </View>
                <View>
                  <InputText
                    {...this.props}
                    placeholder="Email"
                    maxLength={30}
                    onChangeText={props.handleChange('email')}
                    editable
                  />
                  <Text style={styles.errorTxt}>
                    {props.touched.email && props.errors.email}
                  </Text>
                </View>
                <View>
                  <View style={styles.wraptxtInput}>
                    <InputText
                      {...this.props}
                      isPassword={true}
                      placeholder="Password"
                      editable
                      password={this.state.showPassword}
                      onChangeText={props.handleChange('password')}
                    />
                    <Entypo
                      name={this.state.icEye}
                      size={24}
                      color="grey"
                      onPress={() => this.eyeIconFun()}
                    />
                  </View>
                  <Text style={styles.errorTxt}>
                    {props.touched.password && props.errors.password}
                  </Text>
                </View>
                <View style={styles.termConditionWrap}>
                  <Checkbox
                    status={this.state.termChecked ? 'checked' : 'unchecked'}
                    onPress={() => {
                      this.setState({termChecked: !this.state.termChecked});
                    }}
                  />
                  <Text style={styles.txtTerm}>
                    I agree to Weebox{' '}
                    <Text style={styles.txtUnderLine}>Terms of Service</Text>{' '}
                    and
                    <Text style={styles.txtUnderLine}> Privacy Policy</Text>
                  </Text>
                </View>
                <View style={styles.termConditionWrap}>
                  <Checkbox
                    status={this.state.productChecked ? 'checked' : 'unchecked'}
                    onPress={() => {
                      this.setState({
                        productChecked: !this.state.productChecked,
                      });
                    }}
                  />
                  <Text style={styles.txtTerm}>
                    I agree to receive news and product updates from Weebox
                  </Text>
                </View>
                <Button
                  label="Sign Up"
                  customStyles={{
                    alignSelf: 'center',
                  }}
                  onPress={props.handleSubmit}
                />
                {/* lines with or*/}

                <View style={styles.socialBtnWWrap}></View>
              </View>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
    );
  }
}

export default SignUp;
