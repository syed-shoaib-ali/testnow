import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import styles from './Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
class SignUpFaqs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isQ1Visible: false,
      isQ2Visible: false,
      isQ3Visible: false,
      isQ4Visible: false,
      isQ5Visible: false,
      isQ6Visible: false,
      isQ7Visible: false,
      isQ8Visible: false,
      isQ9Visible: false,
      isQ10Visible: false,
      isQ11Visible: false,
      isQ12Visible: false,
      isQ13Visible: false,
      isQ14Visible: false,
      isQ15Visible: false,
      isQ16Visible: false,
      isQ17Visible: false,
    };
  }
  toggleQ1 = () => {
    this.setState({isQ1Visible: !this.state.isQ1Visible});
  };
  toggleQ2 = () => {
    this.setState({isQ2Visible: !this.state.isQ2Visible});
  };
  toggleQ3 = () => {
    this.setState({isQ3Visible: !this.state.isQ3Visible});
  };
  toggleQ4 = () => {
    this.setState({isQ4Visible: !this.state.isQ4Visible});
  };
  toggleQ5 = () => {
    this.setState({isQ5Visible: !this.state.isQ5Visible});
  };
  toggleQ6 = () => {
    this.setState({isQ6Visible: !this.state.isQ6Visible});
  };
  toggleQ7 = () => {
    this.setState({isQ7Visible: !this.state.isQ7Visible});
  };
  toggleQ8 = () => {
    this.setState({isQ8Visible: !this.state.isQ8Visible});
  };
  toggleQ9 = () => {
    this.setState({isQ9Visible: !this.state.isQ9Visible});
  };
  toggleQ10 = () => {
    this.setState({isQ10Visible: !this.state.isQ10Visible});
  };
  toggleQ11 = () => {
    this.setState({isQ11Visible: !this.state.isQ11Visible});
  };
  toggleQ12 = () => {
    this.setState({isQ12Visible: !this.state.isQ12Visible});
  };
  toggleQ13 = () => {
    this.setState({isQ13Visible: !this.state.isQ13Visible});
  };
  toggleQ14 = () => {
    this.setState({isQ14Visible: !this.state.isQ14Visible});
  };
  toggleQ15 = () => {
    this.setState({isQ15Visible: !this.state.isQ15Visible});
  };
  toggleQ16 = () => {
    this.setState({isQ16Visible: !this.state.isQ16Visible});
  };
  toggleQ17 = () => {
    this.setState({isQ17Visible: !this.state.isQ17Visible});
  };
  render() {
    return (
      <ScrollView style={styles.MainView}>
        {/* Header Start*/}

        <View style={styles.headerWrap}>
          <AntDesign
            name="close"
            size={24}
            color="#BDBDBD"
            onPress={() => this.props.navigation.goBack()}
          />
          <Text style={styles.txtMsg}>FAQs</Text>
        </View>
        {/* Header End*/}
        <View style={styles.srcWidthWrap}>
          <>
            <View style={styles.flexRowWrap}>
              <View style={styles.widthQue}>
                <Text style={styles.txtQuestion}>How do I login?</Text>
              </View>
              <AntDesign
                name="downcircleo"
                size={20}
                color="#000000"
                onPress={() => this.toggleQ1()}
              />
            </View>
            {this.state.isQ1Visible === true ? (
              <View style={styles.viewbgColSet}>
                <Text style={styles.modalQueTxt}>
                  You would have received an email with all the details and your
                  login credentials for the exam. You can also login using QR
                  code if you have received qr code in the email.
                </Text>
              </View>
            ) : null}
          </>
          <>
            <View style={styles.flexRowWrap}>
              <View style={styles.widthQue}>
                <Text style={styles.txtQuestion}>
                  I have not received email with Login credentials?
                </Text>
              </View>
              <AntDesign
                name="downcircleo"
                size={20}
                color="#000000"
                onPress={() => this.toggleQ2()}
              />
            </View>
            {this.state.isQ2Visible === true ? (
              <View style={styles.viewbgColSet}>
                <Text style={styles.modalQueTxt}>
                  Check Spam or Junk folder.
                </Text>
              </View>
            ) : null}
          </>
          <>
            <View style={styles.flexRowWrap}>
              <View style={styles.widthQue}>
                <Text style={styles.txtQuestion}>
                  I have forgotten my password ? how to get password ?
                </Text>
              </View>
              <AntDesign
                name="downcircleo"
                size={20}
                color="#000000"
                onPress={() => this.toggleQ3()}
              />
            </View>
            {this.state.isQ3Visible === true ? (
              <View style={styles.viewbgColSet}>
                <Text style={styles.modalQueTxt}>
                  Click on Forgot Password. Enter your email id and password
                  will be shared with you.
                </Text>
              </View>
            ) : null}
          </>
          <>
            <View style={styles.flexRowWrap}>
              <View style={styles.widthQue}>
                <Text style={styles.txtQuestion}>
                  I am trying to log in and it says ‘Invalid Login Credentials’
                  ?
                </Text>
              </View>
              <AntDesign
                name="downcircleo"
                size={20}
                color="#000000"
                onPress={() => this.toggleQ4()}
              />
            </View>
            {this.state.isQ4Visible === true ? (
              <View style={styles.viewbgColSet}>
                <Text style={styles.modalQueTxt}>
                  Check the ID and password. Type the password manually instead
                  of copy pasting. In case if you are still not able to log in,
                  please close the application and start again.
                </Text>
              </View>
            ) : null}
          </>

          <>
            <View style={styles.flexRowWrap}>
              <View style={styles.widthQue}>
                <Text style={styles.txtQuestion}>
                  My account has been locked due to multiple failed attempts ?
                </Text>
              </View>
              <AntDesign
                name="downcircleo"
                size={20}
                color="#000000"
                onPress={() => this.toggleQ5()}
              />
            </View>
            {this.state.isQ5Visible === true ? (
              <View style={styles.viewbgColSet}>
                <Text style={styles.modalQueTxt}>
                  Please relaunch the application and enter the id and password
                  again.
                </Text>
              </View>
            ) : null}
          </>

          <>
            <View style={styles.flexRowWrap}>
              <View style={styles.widthQue}>
                <Text style={styles.txtQuestion}>
                  I have closed my Test and want to re-login?
                </Text>
              </View>
              <AntDesign
                name="downcircleo"
                size={20}
                color="#000000"
                onPress={() => this.toggleQ6()}
              />
            </View>
            {this.state.isQ6Visible === true ? (
              <View style={styles.viewbgColSet}>
                <Text style={styles.modalQueTxt}>
                  Don’t close the test window/ kill the application or responses
                  will not be saved.
                </Text>
              </View>
            ) : null}
          </>

          <>
            <View style={styles.flexRowWrap}>
              <View style={styles.widthQue}>
                <Text style={styles.txtQuestion}>
                  I am trying to re-login and getting a message ‘Login Access
                  Denied’?
                </Text>
              </View>
              <AntDesign
                name="downcircleo"
                size={20}
                color="#000000"
                onPress={() => this.toggleQ7()}
              />
            </View>
            {this.state.isQ7Visible === true ? (
              <View style={styles.viewbgColSet}>
                <Text style={styles.modalQueTxt}>
                  Please launch the application and enter the credentials again
                </Text>
              </View>
            ) : null}
          </>

          <>
            <View style={styles.flexRowWrap}>
              <View style={styles.widthQue}>
                <Text style={styles.txtQuestion}>
                  My test is showing as ‘Test Expired ?
                </Text>
              </View>
              <AntDesign
                name="downcircleo"
                size={20}
                color="#000000"
                onPress={() => this.toggleQ8()}
              />
            </View>
            {this.state.isQ8Visible === true ? (
              <View style={styles.viewbgColSet}>
                <Text style={styles.modalQueTxt}>
                  Please call our Helpline number for Technical Assistance. It
                  may take a while for your call to be answered. We appreciate
                  your patience.
                </Text>
              </View>
            ) : null}
          </>

          <>
            <View style={styles.flexRowWrap}>
              <View style={styles.widthQue}>
                <Text style={styles.txtQuestion}>
                  I see a message ‘No Test Is Active’?
                </Text>
              </View>
              <AntDesign
                name="downcircleo"
                size={20}
                color="#000000"
                onPress={() => this.toggleQ9()}
              />
            </View>
            {this.state.isQ9Visible === true ? (
              <View style={styles.viewbgColSet}>
                <Text style={styles.modalQueTxt}>
                  No Test has been assigned to you. You will see a Test once it
                  has been assigned to you.
                </Text>
              </View>
            ) : null}
          </>

          <>
            <View style={styles.flexRowWrap}>
              <View style={styles.widthQue}>
                <Text style={styles.txtQuestion}>
                  I see my microphone is not working ?
                </Text>
              </View>
              <AntDesign
                name="downcircleo"
                size={20}
                color="#000000"
                onPress={() => this.toggleQ10()}
              />
            </View>
            {this.state.isQ10Visible === true ? (
              <View style={styles.viewbgColSet}>
                <Text style={styles.modalQueTxt}>
                  Go to the application setting and allow microphone access.
                </Text>
              </View>
            ) : null}
          </>

          <>
            <View style={styles.flexRowWrap}>
              <View style={styles.widthQue}>
                <Text style={styles.txtQuestion}>
                  I see my camera is not working
                </Text>
              </View>
              <AntDesign
                name="downcircleo"
                size={20}
                color="#000000"
                onPress={() => this.toggleQ11()}
              />
            </View>
            {this.state.isQ11Visible === true ? (
              <View style={styles.viewbgColSet}>
                <Text style={styles.modalQueTxt}>
                  Go to the application setting and allow the access for camera.
                </Text>
              </View>
            ) : null}
          </>
          <>
            <View style={styles.flexRowWrap}>
              <View style={styles.widthQue}>
                <Text style={styles.txtQuestion}>
                  How to upload my answer sheet ?
                </Text>
              </View>
              <AntDesign
                name="downcircleo"
                size={20}
                color="#000000"
                onPress={() => this.toggleQ12()}
              />
            </View>
            {this.state.isQ12Visible === true ? (
              <View style={styles.viewbgColSet}>
                <Text style={styles.modalQueTxt}>
                  Click the camera icon on the bottom and upload all your answer
                  sheet one by one in a single attempt.
                </Text>
              </View>
            ) : null}
          </>
          <>
            <View style={styles.flexRowWrap}>
              <View style={styles.widthQue}>
                <Text style={styles.txtQuestion}>
                  Proceed now button is not activated?
                </Text>
              </View>
              <AntDesign
                name="downcircleo"
                size={20}
                color="#000000"
                onPress={() => this.toggleQ13()}
              />
            </View>
            {this.state.isQ13Visible === true ? (
              <View style={styles.viewbgColSet}>
                <Text style={styles.modalQueTxt}>
                  It will be activated once the waiting period of 30 second is
                  over.
                </Text>
              </View>
            ) : null}
          </>

          <>
            <View style={styles.flexRowWrap}>
              <View style={styles.widthQue}>
                <Text style={styles.txtQuestion}>
                  I am getting the message test submitted successfully . what to
                  do now ?
                </Text>
              </View>
              <AntDesign
                name="downcircleo"
                size={20}
                color="#000000"
                onPress={() => this.toggleQ14()}
              />
            </View>
            {this.state.isQ14Visible === true ? (
              <View style={styles.viewbgColSet}>
                <Text style={styles.modalQueTxt}>
                  You have successfully submitted the test.
                </Text>
              </View>
            ) : null}
          </>

          <>
            <View style={styles.flexRowWrap}>
              <View style={styles.widthQue}>
                <Text style={styles.txtQuestion}>How to flag my question?</Text>
              </View>
              <AntDesign
                name="downcircleo"
                size={20}
                color="#000000"
                onPress={() => this.toggleQ15()}
              />
            </View>
            {this.state.isQ15Visible === true ? (
              <View style={styles.viewbgColSet}>
                <Text style={styles.modalQueTxt}>
                  There is a flag icon on the question. You can always flag and
                  review your responses later before submission.
                </Text>
              </View>
            ) : null}
          </>
          <>
            <View style={styles.flexRowWrap}>
              <View style={styles.widthQue}>
                <Text style={styles.txtQuestion}>
                  Getting warning like no face found, multiple ppl in test
                  window , foreign object found ?
                </Text>
              </View>
              <AntDesign
                name="downcircleo"
                size={20}
                color="#000000"
                onPress={() => this.toggleQ16()}
              />
            </View>
            {this.state.isQ16Visible === true ? (
              <View style={styles.viewbgColSet}>
                <Text style={styles.modalQueTxt}>
                  These are the warnings generated and define you may be
                  attempting cheating while taking the test. Please sit straight
                  and take your test.
                </Text>
              </View>
            ) : null}
          </>

          <>
            <View style={styles.flexRowWrap}>
              <View style={styles.widthQue}>
                <Text style={styles.txtQuestion}>
                  16. I am on the feedback screen ? how to rate my experience ?
                </Text>
              </View>
              <AntDesign
                name="downcircleo"
                size={20}
                color="#000000"
                onPress={() => this.toggleQ17()}
              />
            </View>
            {this.state.isQ17Visible === true ? (
              <View style={styles.viewbgColSet}>
                <Text style={styles.modalQueTxt}>
                  You can rate starts on the experience of your test and return
                  to login if you want to take any other test.
                </Text>
              </View>
            ) : null}
          </>

          {/* <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignUpResetPass')}>
            <Text style={styles.txtNotSatisfied}>
              Not Satisfied ? Click to contact us
            </Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    );
  }
}

export default SignUpFaqs;
