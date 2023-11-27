import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import bgImg from '../../../Assets/bgImg.png';
import styles from './Styles';
import Header from '../../../Components/Header/Header';
import InputText from '../../../Components/TextInput/TextInput';
import Button from '../../../Components/Button/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import helpIcon from '../../../Assets/helpIcon.png';
import {Picker} from '@react-native-community/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Formik} from 'formik';
import * as yup from 'yup';
import Theme from '../../../utils/Theme';
const reviewSchema = yup.object({
  fname: yup
    .string() // entry must be a string
    .required('First Name cannot be empty!'), // Field must required
  lname: yup
    .string() // entry must be a string
    .required('Last Name cannot be empty!'), // Field must required
});
class RegisterPersonalDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: '',
      lname: '',
      gender: 'None',
    };
  }
  saveData = async () => {
    await AsyncStorage.setItem('fname', this.state.fname);
    await AsyncStorage.setItem('lname', this.state.lname);
    await AsyncStorage.setItem('gender', this.state.gender);
    console.log('LNAME ', this.state.lname);
    this.props.navigation.navigate('RegisterTestCentreDetail');
  };
  render() {
    return (
      <ImageBackground style={styles.MainView} source={bgImg}>
        {/* Warap all according to the screen width */}
        <KeyboardAwareScrollView>
          <View style={styles.srcWidthWrap}>
            <Header
              isThreeComponent={true}
              register="Register"
              title="Personal Details"
              onPressLeft={() => this.props.navigation.goBack()}
            />
            <Formik
              initialValues={{
                fname: this.state.fname,
                lname: this.state.lname,
              }}
              validationSchema={reviewSchema} //check validation
              onSubmit={(values, actions) => {
                this.setState({
                  fname: values.fname,
                  lname: values.lname,
                });

                console.log('STATE ', values);
                this.saveData();
              }}>
              {(props) => (
                <View style={styles.srcWidthWrap}>
                  <View>
                    <InputText
                      {...this.props}
                      placeholder="First Name"
                      maxLength={30}
                      onChangeText={props.handleChange('fname')}
                      editable
                      isWhite={true}
                    />
                    <Text style={styles.errorTxt}>
                      {props.touched.fname && props.errors.fname}
                    </Text>
                  </View>
                  <View>
                    <InputText
                      {...this.props}
                      placeholder="Last Name"
                      maxLength={Theme.txtLength}
                      onChangeText={props.handleChange('lname')}
                      editable
                      isWhite={true}
                    />
                    <Text style={styles.errorTxt}>
                      {props.touched.lname && props.errors.lname}
                    </Text>
                  </View>
                  <View style={styles.pickerWrap}>
                    <Picker
                      selectedValue={this.state.gender}
                      style={styles.pickerStyle}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({gender: itemValue})
                      }>
                      <Picker.Item label="Gender" value="Gender" />
                      <Picker.Item label="Male" value="Male" />
                      <Picker.Item label="FeMale" value="FeMale" />
                      <Picker.Item label="Other" value="Other" />
                    </Picker>
                  </View>

                  <Button
                    label="Next"
                    isIcon={true}
                    customStyles={styles.btnCutonSty}
                    onPress={props.handleSubmit}
                  />
                  {/* Bottom Button */}
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

export default RegisterPersonalDetail;
