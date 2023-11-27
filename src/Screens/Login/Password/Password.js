import React, { Component } from "react";
import { View, Text, ImageBackground, Modal } from "react-native";
import { Picker } from "@react-native-community/picker";
import styles from "./Styles";
import Header from "../../../Components/Header/Header";
import Entypo from "react-native-vector-icons/Entypo";
import bgImg from "../../../Assets/bgImg.png";
import InputText from "../../../Components/TextInput/TextInput";
import Button from "../../../Components/Button/Button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import ActivityIndicator from "../../../Components/ActivityIndicator/ActivityIndicator";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Formik } from "formik";
import * as yup from "yup";
import { baseURL } from "../../../apis/Apis";
//Aes

import { encryptData } from "../../../apis/secure";
import Theme from "../../../utils/Theme";

const reviewSchema = yup.object({
  password: yup.string().required("Password cannot be empty!").min(4),
});

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidateName: "",
      icEye: "eye-with-line",
      showPassword: true,
      isloading: false,
      token: "",
      // password: '',
      // password: 'password@1',
      password: "password",
      companyData: this.props.route.params.companyData,
      selectedCode: "",
      email: "",
    };
  }

  async componentDidMount() {
    const email = await AsyncStorage.getItem("simpleEmail");
    this.setState({ email: email });
    this.checkLength();
  }
  checkLength = async () => {
    if (this.state.companyData.compCode.length === 1) {
      this.setState({ selectedCode: this.state.companyData.compCode[0] });
      await AsyncStorage.setItem("comapnyCode", this.state.selectedCode);
    }
  };
  CompCodeFunction = async (value) => {
    await AsyncStorage.setItem("comapnyCode", value);
    console.log("comapnyCode", value);
  };

  signInAuthentication = async () => {
    this.setState({ isloading: true });
    let accessToken = "OG5MTnNzRTNWRXlX";
    let compCode = await AsyncStorage.getItem("comapnyCode");
    let userName = await AsyncStorage.getItem("simpleEmail");
    let userPassword = this.state.password;

    let user = "";
    let password = "";

    user = encryptData(userName);
    password = encryptData(userPassword);
    const auth =
      baseURL +
      "authentication/qrbased/" +
      accessToken +
      "/" +
      compCode +
      "/" +
      user +
      "/" +
      password;

    await axios
      .get(auth)
      .then(async ({ data }) => {
        // console.log('data==>', data);
        let name = data.name;
        // console.log('name:', name);
        await AsyncStorage.setItem("candidateName", name);

        if (data.status === "success") {
          await AsyncStorage.setItem("email", encryptData(userName));
          await AsyncStorage.setItem("WID", data.wheeboxID);
          await AsyncStorage.setItem("EMAIL", this.state.email);
          this.props.navigation.replace("TestList");
        } else {
          alert(data.message);
        }
        this.setState({ isloading: false });
      })
      .catch((error) => {
        this.setState({ isloading: false });
        console.log(error);
        alert("Kindly select your right Password/Company");
      });
  };

  eyeIconFun = () => {
    this.setState({ showPassword: !this.state.showPassword });
    if (this.state.showPassword === true) {
      this.setState({ icEye: "eye" });
    } else {
      this.setState({ icEye: "eye-with-line" });
    }
  };

  render() {
    return (
      <ImageBackground style={styles.MainView} source={bgImg}>
        <Header
          isIconTitle={true}
          backIcon="arrowleft"
          title="Password"
          onPress={() => this.props.navigation.goBack()}
        />

        <Formik
          initialValues={{
            email: this.state.email,
            password: this.state.password,
          }}
          validationSchema={reviewSchema} //check validation
          onSubmit={(values, actions) => {
            this.setState({ email: values.email, password: values.password });
            this.signInAuthentication();
          }}
        >
          {(props) => (
            <KeyboardAwareScrollView>
              <View style={styles.srcWidthWrap}>
                <View>
                  <View style={styles.wraptxtInput}>
                    <InputText
                      {...this.props}
                      isPassword={true}
                      placeholder="Password"
                      editable
                      password={this.state.showPassword}
                      onChangeText={props.handleChange("password")}
                    />
                    <Entypo
                      name={this.state.icEye}
                      size={Theme.iconSize}
                      color="grey"
                      onPress={() => this.eyeIconFun()}
                    />
                  </View>
                  <Text style={styles.errorTxt}>
                    {props.touched.password && props.errors.password}
                  </Text>
                </View>
                {/* Check */}
                {this.state.companyData.compCode.length > 1 ? (
                  <View
                    style={{
                      backgroundColor: Theme.white,
                      borderRadius: Theme.btnRadius,
                    }}
                  >
                    <Picker
                      mode="dropdown"
                      selectedValue={this.state.selectedCode}
                      onValueChange={(itemValue, itemIndex) => {
                        this.CompCodeFunction(itemValue),
                          this.setState({ selectedCode: itemValue });
                      }}
                    >
                      <Picker.Item label="Select Company" value="" />
                      {this.state.companyData.compCode.map((item, index) => {
                        return (
                          <Picker.Item
                            label={this.state.companyData.compName[index]}
                            value={item}
                            key={index}
                          />
                        );
                      })}
                    </Picker>
                  </View>
                ) : null}
                {/* Check End */}

                <Button label="Login" onPress={props.handleSubmit} />
              </View>
            </KeyboardAwareScrollView>
          )}
        </Formik>

        {this.state.isloading === true ? (
          <Modal animationType="fade" transparent={true}>
            <View
              style={{
                flex: 1,
                opacity: 0.5,
                backgroundColor: "black",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <ActivityIndicator />
            </View>
          </Modal>
        ) : null}
      </ImageBackground>
    );
  }
}

export default Password;
