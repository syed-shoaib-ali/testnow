import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import styles from "./Styles";
import Header from "../../Components/Header/Header";
import bgImg from "../../Assets/bgImg.png";
import InputText from "../../Components/TextInput/TextInput";
import Button from "../../Components/Button/Button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import ActivityIndicator from "../../Components/ActivityIndicator/ActivityIndicator";
import qrIcon from "../../Assets/qrIcon.png";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Formik } from "formik";
import * as yup from "yup";
import Theme from "../../utils/Theme";
//Aes
import { encryptData } from "../../apis/secure";
import { baseURL } from "../../apis/Apis";

const reviewSchema = yup.object({
  email: yup
    .string() // entry must be a string
    .required("Login ID cannot be empty!"), // Field must required
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: false,
      token: "",
      // email: 'user_prashant1@wheebox.com',
      // email: 'Demo123456@gmail.com',
      // email: 'cbse@wheebox.com',
      // email: 'prashantking@gmail.com',
      // email: 'Apptesting1@wheebox.com',
      // email: 'Apptesting4@wheebox.com',
      // email: 'apptesting3@wheebox.com',
      // email: 'Mobileuser1@wheebox.com',
      // email: 'apptesting2@wheebox.com',
      // email: 'lms.learningoutcome@gmail.com',
      // email: 'thebanwala@gmail.com',
      // email: 'Demo2@testnow.app',
      // email: 'Mobileuser1@wheebox.com',
      // email: 'User_pushpa@wheebox.com',
      // email: 'user_pushpa17@wheebox.com',
      // email: "",
      email: "thebanwala@testnow.com",
      companyData: [],
    };
  }

  // async componentDidMount() {
  //   await AsyncStorage.clear();
  // }

  signInAuthentication = async () => {
    this.setState({ isloading: true });
    let accessToken = "8nLNssE3VEyW";
    let userName = this.state.email;

    await AsyncStorage.setItem("email", userName);

    let user = "";

    user = encryptData(userName);

    const url = baseURL + "authentication/loginidbased/" + user;

    await axios({
      method: "post",
      url,
      headers: {
        accessToken: accessToken,
      },
    })
      .then(async ({ data }) => {
        if (data.status === "success") {
          await AsyncStorage.setItem("encEmail", encryptData(userName));
          await AsyncStorage.setItem("simpleEmail", this.state.email);
          this.setState({ companyData: data });
          this.props.navigation.navigate("Password", {
            companyData: this.state.companyData,
          });
        } else {
          alert(data.message);
        }
        this.setState({ isloading: false });
      })
      .catch((error) => {
        this.setState({ isloading: false });
        console.log(error.response.data);
        alert(error);
      });
  };

  render() {
    return (
      <ImageBackground style={styles.MainView} source={bgImg}>
        <Header
          isTwoRightBtn={true}
          btnColor={Theme.darkGrey}
          disable={true}
          title="Login"
          rightTitle="Register"
          onPressRight={() =>
            this.props.navigation.navigate("RegisterLoginDetail")
          }
        />

        <Formik
          initialValues={{
            email: this.state.email,
          }}
          validationSchema={reviewSchema} //check validation
          onSubmit={(values, actions) => {
            this.setState({ email: values.email });
            this.signInAuthentication();
          }}
        >
          {(props) => (
            <KeyboardAwareScrollView>
              <View style={styles.srcWidthWrap}>
                <View>
                  <InputText
                    {...this.props}
                    placeholder="Enter Login ID"
                    maxLength={Theme.txtLength}
                    onChangeText={props.handleChange("email")}
                    editable
                  />
                  <Text style={styles.errorTxt}>
                    {props.touched.email && props.errors.email}
                  </Text>
                </View>

                <Button label="Next" onPress={props.handleSubmit} />
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("ForgotPassword")
                  }
                >
                  <Text
                    style={{
                      ...styles.txtOr,
                      alignSelf: "flex-end",
                      marginRight: 10,
                      marginTop: -10,
                      marginBottom: 20,
                      color: Theme.grey,
                    }}
                  >
                    Forgot password?
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnWrap}
                  onPress={() => this.props.navigation.navigate("LoginQrCode")}
                >
                  <Image source={qrIcon} style={styles.imgQr} />

                  <Text style={styles.txtLoginQr}>Login with QR</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAwareScrollView>
          )}
        </Formik>

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

export default Login;
