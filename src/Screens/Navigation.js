import React, { Component } from "react";
import { View, StatusBar, SafeAreaView, LogBox } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
//Screens
import SplashScreen from "./SplashScreen/SplashScreen";
import Sumbitted from "./Sumbitted/Sumbitted";
import SignUpScreen from "./SignUp/SignUp";
import RegisterLoginDetail from "./Register/RegisterLoginDetail/RegisterLoginDetail";
import RegisterPersonalDetail from "./Register/RegisterPersonalDetail/RegisterPersonalDetail";
import RegisterTestCentreDetail from "./Register/RegisterTestCentreDetail/RegisterTestCentreDetail";
import RegisterSelectTest from "./Register/RegisterSelectTest/RegisterSelectTest";
import ResetPassword from "./Register/ResetPassword/ResetPassword";
import Login from "./Login/Login";
import Password from "./Login/Password/Password";
import LoginQrCode from "./Login/LoginQrCode/LoginQrCode";
import QrCodeScan from "./Login/LoginQrCode/QrCodeScan/QrCodeScan";
import ForgotPassword from "./Login/ForgotPassword/ForgotPassword";
import TestList from "./Test/TestList/TestList";
import TestDetails from "./Test/TestDetails/TestDetails";
import HardwareTestFailure from "./Test/HardwareTestFailure/HardwareTestFailure";
import HardwarePermissionFailure from "./Test/HardwarePermissionFailure/HardwarePermissionFailure";
import WaitingLounge from "./Test/WaitingLounge/WaitingLounge";
import TestHardwarePermissionAllow from "./Test/TestHardwarePermissionAllow/TestHardwarePermissionAllow";
import TestHardwarePermissionFailure from "./Test/TestHardwarePermissionFailure/TestHardwarePermissionFailure";
import QuestionRadio from "./Questions/QuestionRadio/QuestionRadio";
import SubjectiveQuestionRadio from "./Questions/SubjectiveQuestionRadio/SubjectiveQuestionRadio";
import QuestionRadio1 from "./Questions/QuestionRadio1/QuestionRadio1";
import QuestionRadioMesseges from "./Questions/QuestionRadioMesseges/QuestionRadioMesseges";
import Warnings from "./Warnings/Warnings";
import SignUpHelpCenter from "./SignUp/SignUpHelpCenter/SignUpHelpCenter";
import SignUpFaqs from "./SignUp/SignUpFaqs/SignUpFaqs";
import SignUpResetPass from "./SignUp/SignUpResetPass/SignUpResetPass";
import SignUpResetPassword from "./SignUp/SignUpResetPassword/SignUpResetPassword";
import Rating from "./Rating/Rating";
import TestInstruction from "./Test/TestInstruction/TestInstruction";
import Privacy from "./TermsPrivacy/Privacy";
import Terms from "./TermsPrivacy/Terms";
import ImagePick from "../Components/ImagePicker/ImagePicker";
import Test from "./Test";
import Check from "./check";
import LoginScreen from "./Call/LoginScreen";
import CallScreen from "./Call/CallScreen";
import VideoScreen from "./VideoScreen";
const Stack = createStackNavigator();
class Navigation extends Component {
  componentDidMount() {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    LogBox.ignoreLogs(["Possible Unhandled Promise Rejection"]);
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          {Platform.OS === "ios" ? (
            <StatusBar barStyle="dark-content" />
          ) : (
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          )}
        </View>

        <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
          <Stack.Screen name="VideoScreen" component={VideoScreen} />
          <Stack.Screen name="LoginScreenNew" component={LoginScreen} />
          <Stack.Screen name="Check" component={Check} />
          <Stack.Screen name="Call" component={CallScreen} />
          <Stack.Screen
            name="TEST"
            component={Test}
            options={{ animationTypeForReplace: "pop" }}
          />
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ animationTypeForReplace: "pop" }}
          />
          <Stack.Screen
            name="Sumbitted"
            component={Sumbitted}
            options={{ animationTypeForReplace: "pop" }}
          />

          {/* InSide Register Folder Start */}
          <Stack.Screen
            name="RegisterLoginDetail"
            component={RegisterLoginDetail}
          />
          <Stack.Screen
            name="RegisterPersonalDetail"
            component={RegisterPersonalDetail}
          />
          <Stack.Screen
            name="RegisterTestCentreDetail"
            component={RegisterTestCentreDetail}
          />
          <Stack.Screen
            name="RegisterSelectTest"
            component={RegisterSelectTest}
          />
          {/* InSide Register Folder End*/}
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          {/* Login */}
          <Stack.Screen name="LoginScreen" component={Login} />
          <Stack.Screen name="Password" component={Password} />

          <Stack.Screen name="LoginQrCode" component={LoginQrCode} />
          <Stack.Screen name="QrCodeScan" component={QrCodeScan} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          {/* Test */}
          <Stack.Screen name="TestList" component={TestList} />
          <Stack.Screen name="TestDetails" component={TestDetails} />
          <Stack.Screen
            name="HardwareTestFailure"
            component={HardwareTestFailure}
          />
          <Stack.Screen name="WaitingLounge" component={WaitingLounge} />
          <Stack.Screen name="TestInstruction" component={TestInstruction} />
          <Stack.Screen
            name="TestHardwarePermissionFailure"
            component={TestHardwarePermissionFailure}
          />
          <Stack.Screen
            name="TestHardwarePermissionAllow"
            component={TestHardwarePermissionAllow}
          />
          <Stack.Screen
            name="HardwarePermissionFailure"
            component={HardwarePermissionFailure}
          />
          {/* Questions */}
          <Stack.Screen
            name="QuestionRadio"
            component={QuestionRadio}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen
            name="QuestionRadio1"
            component={QuestionRadio1}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen
            name="QuestionRadioMesseges"
            component={QuestionRadioMesseges}
          />
          <Stack.Screen
            name="SubjectiveQuestionRadio"
            component={SubjectiveQuestionRadio}
          />
          {/* Warnings */}
          <Stack.Screen name="Warnings" component={Warnings} />
          {/* Signup */}
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="SignUpHelpCenter" component={SignUpHelpCenter} />
          <Stack.Screen name="SignUpFaqs" component={SignUpFaqs} />
          <Stack.Screen name="SignUpResetPass" component={SignUpResetPass} />
          <Stack.Screen
            name="SignUpResetPassword"
            component={SignUpResetPassword}
          />
          {/* Rating */}
          <Stack.Screen name="Rating" component={Rating} />
          {/* Privacy and Terms  */}
          <Stack.Screen name="Privacy" component={Privacy} />
          <Stack.Screen name="Terms" component={Terms} />

          {/* Image Picker */}
          <Stack.Screen name="ImagePick" component={ImagePick} />
        </Stack.Navigator>
      </SafeAreaView>
    );
  }
}

export default Navigation;
