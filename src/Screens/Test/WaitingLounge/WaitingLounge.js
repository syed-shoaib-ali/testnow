import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import styles from "./Styles";
import Button from "../../../Components/Button/Button";
import Header from "../../../Components/Header/Header";
import { Checkbox } from "react-native-paper";
import { accessToken } from "../../../apis/secure";
import AntDesign from "react-native-vector-icons/AntDesign";
import CountDown from "react-native-countdown-component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseURL } from "../../../apis/Apis";
import Theme from "../../../utils/Theme";

class WaitingLounge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidateName: "",
      btnActive: false,
      startTest: [
        {
          title: "MCQS and Subjective -\n Remote Proctoring",
          testDetailTitle: "Test detail text will be appearns here",
          testDetailCaption:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Placeat molestiae nobis nostrum modi sequi iure quae quis reprehenderit dolorem eveniet optio, mollitia quia labore, assumenda at! Atque eligendi cumque ut vitae eum id dolor quas earum, incidunt, tenetur rem molestiae consectetur cupiditate qui? Tenetur illum repellat accusantium, dolor eos obcaecati.",
          testName: "HTML",
          AllocatedTime: "60 mins",
          noOfQuestions: "45",
          correctAnsCarry: "1 Mark",
          wrongAnsCarry: "0 Mark",
        },
      ],
      testId: "",
      testDetails: "",
      testName: "",
      termChecked: false,
      approverScreen: "",
      keySno: "",
      compCode: "",
      loading: true,
      isResume: false,
      allowResumeTestMinutes: 60,
    };
  }

  timeDifference(date1, date2) {
    return date1 - date2;
  }

  async componentDidMount() {
    this.setState({
      candidateName: await AsyncStorage.getItem("candidateName"),
    });
    const key = this.props.route.params.testId.toString();
    const isResume = await AsyncStorage.getItem(key);
    const savedTime = await AsyncStorage.getItem(key + "SavedTime");
    const now = new Date().getTime();

    const timedif = this.timeDifference(now, savedTime);
    const minsAgo = Math.round(timedif / 60000);

    console.log(minsAgo);

    this.setState({ testName: "", approverScreen: "" });
    await AsyncStorage.setItem("testId", key);
    this.setState({ testId: key });
    this.setState({ compCode: await AsyncStorage.getItem("comapnyCode") });

    axios({
      method: "POST",
      url:
        baseURL +
        "prep/getTestInstruction/" +
        this.state.compCode +
        "?testNo=" +
        key +
        "&chooseLanguage=English",
      headers: {
        accessToken: accessToken,
      },
    })
      .then(async ({ data }) => {
        this.setState({ testDetails: data.testDetails });
        await AsyncStorage.setItem("SI", data?.testDetails?.testInst || "");
        if (isResume && minsAgo < data.testDetails?.allowResumeTestMinutes) {
          this.setState({ isResume: true });
        }
        setTimeout(() => {
          this.setState({ loading: false });
        }, 1000);
      })
      .catch((e) => {
        alert(e);
      });
  }

  render() {
    const { approverScreen, testName, testDetails, loading, isResume } =
      this.state;
    const startTest = async () => {
      this.props.navigation.navigate("QuestionRadio", {
        allowResumeTestMinutes: testDetails.allowResumeTestMinutes,
      });
      return;
    };

    return (
      <>
        <ScrollView style={styles.MainView}>
          <Header
            isIconTitle={true}
            backIcon="arrowleft"
            title="Waiting Lounge"
            onPress={() => this.props.navigation.goBack()}
          />

          <View style={styles.viewWrapClock}>
            <AntDesign
              name="clockcircleo"
              color={Theme.white}
              size={Theme.iconSize}
              style={{ right: "50%" }}
            />
            <>
              <Text style={styles.txtWaitTime}>Wait time will be over in</Text>

              {testDetails?.qflag && !loading && (
                <CountDown
                  size={12}
                  until={
                    testDetails?.qflag?.includes(17) ? 0 : isResume ? 10 : 0
                  }
                  onFinish={() => this.setState({ btnActive: true })}
                  digitStyle={
                    {
                      // backgroundColor: 'red',
                    }
                  }
                  digitTxtStyle={{ ...styles.txtWaitTime, top: 1 }}
                  timeLabelStyle={styles.timeLabelStyle}
                  timeToShow={["S"]}
                  timeLabels={{ s: "" }}
                />
              )}
              <Text style={styles.txtWaitTime}>seconds</Text>
            </>
          </View>
          <View style={styles.bgWhiteWrap}>
            <View style={styles.srcWidthWrap}>
              <Text style={styles.txtParagraph}>
                Hi{" "}
                <Text
                  style={{ ...styles.txtParagraph, fontWeight: Theme.bold }}
                >
                  {this.state.candidateName}!{" "}
                </Text>
                Please wait in our Approved Test Taker's Waiting Lounge
                {"\n\n"}You are requested to wait on this page until the
                scheduled test time. Please read all the test instructions
                carefully. When the wait time is over, the ‘Proceed Now’ button
                will be activated and will turn green. You can click on it and
                move to the test window.
              </Text>

              <View style={styles.flexRow}>
                <View
                  style={{
                    width: "10%",
                  }}
                >
                  <View style={styles.wrapChecBox1}>
                    <Checkbox
                      status={this.state.termChecked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ termChecked: !this.state.termChecked });
                      }}
                    />
                  </View>
                </View>

                <View style={{ width: "85%", left: "5%" }}>
                  <Text style={styles.txtParagraph}>
                    I have gone through the instructions,{"\n"}navigation tools,
                    security instructions,{"\n"}terms and conditions and privacy
                    policy for taking the test and understand that {"\n"}
                    Wheebox will not be liable for any{"\n"}damages of any kind
                    arising from the use of this site, including but not limited
                    to direct, indirect, incidental, punitive{"\n"}
                    consequential damages.
                  </Text>
                </View>
              </View>
              <Text style={styles.txtSecurity}>Security Instructions</Text>
              <Text style={styles.txtParagraph}>
                During the test, user should not switch from the test page to
                any other page. {"\n"}» 10 warnings are flashed before log-out
                in case user navigates out to any other window or browser during
                the test. {"\n"}» Once logged in through a single browser tab,
                user cannot log in from any other browser / same browser tab.
              </Text>
            </View>
          </View>

          <View style={styles.srcWidthWrap}>
            <>
              <Text style={styles.txtSecurity}>Navigation Tools</Text>
              <Text style={[styles.txtParagraph, { marginTop: 10 }]}>
                » Flag: To flag a question (To respond later), choose an answer
                and click on flag button.{"\n"}» Next: By clicking Next button,
                the next question appears. {"\n"}» Previous: By clicking
                'Previous' button, the previous question appears. {"\n"}» End
                Test: By clicking 'End Test' button, the test gets submitted.
              </Text>
            </>
            <>
              <Text style={styles.txtSecurity}>Legend</Text>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <View style={styles.smallView}>
                  <Text style={styles.txtNumber}>01</Text>
                </View>
                <Text style={styles.txtInsideSmall}>Attempted</Text>
              </View>
              <View style={styles.flexRowWrap}>
                <View
                  style={[styles.smallView, { backgroundColor: "#636363" }]}
                >
                  <Text style={styles.txtNumber}>02</Text>
                </View>
                <Text style={styles.txtInsideSmall}>Unattempted</Text>
              </View>
              <View style={styles.flexRowWrap}>
                <View
                  style={[styles.smallView, { backgroundColor: "#C23939" }]}
                >
                  <Text style={styles.txtNumber}>03</Text>
                </View>
                <Text style={styles.txtInsideSmall}>Flag</Text>
              </View>
            </>
            <>
              <Text style={styles.txtSecurity}>Test Information</Text>
              <View>
                <Text
                  style={[
                    styles.txtParagraph,
                    { marginTop: 10, lineHeight: 25 },
                  ]}
                >
                  Test Name : {this.state.testDetails.testName}
                  {"\n"}
                  Allocated Time : {this.state.testDetails.totalTime}
                  {"\n"}
                  No. Of Questions : {this.state.testDetails.totalQuestion}{" "}
                  {"\n"}
                  Correct Answer Carries : {
                    this.state.testDetails.mark
                  } Mark {"\n"}
                  Wrong Answer Deducts : {this.state.testDetails.nmark} Mark
                </Text>
              </View>
            </>
            <>
              <Text style={styles.txtSecurity}>Standard Instructions</Text>
              <Text
                style={[styles.txtParagraph, { marginTop: 10, lineHeight: 25 }]}
              >
                {testDetails?.testInst}
              </Text>
            </>
          </View>
        </ScrollView>
        <View style={styles.bgBlackWrap}>
          {/* btnActive */}
          <Button
            label={isResume ? "Resume Test" : "Proceed Now"}
            customStyles={styles.btnCuston}
            onPress={startTest}
            disable={
              this.state.termChecked && this.state.btnActive ? false : true
            }
            filledColor={
              this.state.btnActive === true && this.state.termChecked === true
                ? Theme.primary
                : this.state.btnActive === false
                ? Theme.grey
                : Theme.grey
            }
            loading={loading}
          />
          <View style={{ ...styles.flexRowWrap, marginTop: 0 }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Terms")}
            >
              <Text style={styles.txtTerms}>Terms and conditions </Text>
            </TouchableOpacity>
            <Text style={styles.txtTerms}> | </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Privacy")}
            >
              <Text style={styles.txtTerms}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

export default WaitingLounge;
