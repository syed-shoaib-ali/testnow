import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './Styles';
import Button from '../../../Components/Button/Button';
import Header from '../../../Components/Header/Header';
import {Checkbox} from 'react-native-paper';
import {accessToken} from '../../../apis/secure';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseURL} from '../../../apis/Apis';
class HardwarePermissionFailure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTest: [
        {
          title: 'MCQS and Subjective -\n Remote Proctoring',
          testDetailTitle: 'Test detail text will be appearns here',
          testDetailCaption:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Placeat molestiae nobis nostrum modi sequi iure quae quis reprehenderit dolorem eveniet optio, mollitia quia labore, assumenda at! Atque eligendi cumque ut vitae eum id dolor quas earum, incidunt, tenetur rem molestiae consectetur cupiditate qui? Tenetur illum repellat accusantium, dolor eos obcaecati.',
          testName: 'HTML',
          AllocatedTime: '60 mins',
          noOfQuestions: '45',
          correctAnsCarry: '1 Mark',
          wrongAnsCarry: '0 Mark',
        },
      ],
      testId: this.props.route.params.testId,
      testDetails: '',
      compCode: '',
    };
  }
  async componentDidMount() {
    this.setState({compCode: await AsyncStorage.getItem('comapnyCode')});
    axios({
      method: 'POST',
      url:
        baseURL +
        'prep/getTestInstruction/' +
        this.state.compCode +
        '?testNo=' +
        this.state.testId +
        '&chooseLanguage=English',
      headers: {
        accessToken: accessToken,
      },
    })
      .then(({data}) => {
        this.setState({testDetails: data.testDetails});
      })
      .catch((e) => {
        alert(e);
      });
  }

  render() {
    return (
      <ScrollView style={styles.MainView}>
        <Header
          isIconTitle={true}
          backIcon="arrowleft"
          title="Waiting Lounge"
        />
        {/* Sub Header Start*/}
        <Header
          isInSequence={true}
          iconRight="close"
          iconLeft="clockcircleo"
          title="Wait time will over in 00:30 mins"
        />
        {/* Sub Header End*/}
        {/* Warap all according to the screen width */}
        <View style={styles.bgWhiteWrap}>
          <View style={styles.srcWidthWrap}>
            <Text style={styles.txtParagraph}>
              Hi! Name , Please wait in our 'Approved Test Takers Waiting
              Lounge'{'\n\n'}You are requested to wait on this page until the
              scheduled test time. Please read all the test instructions
              carefully. When the wait time is over, the ‘Proceed Now’ button
              will be activated and will turn green. You can click on it and
              move to the test window.
            </Text>

            <View style={styles.flexRow}>
              <Checkbox />
              <Text style={styles.txtParagraph}>
                I have gone through the instructions,{'\n'}navigation tools,
                security instructions,{'\n'}terms and conditions and privacy
                policy{'\n'}for taking the test and understand that {'\n'}
                Wheebox will not be liable for any{'\n'}damages of any kind
                arising from the use{'\n'}of this site, including but not
                limited to
                {'\n'}direct, indirect, incidental, punitive{'\n'}consequential
                damages.
              </Text>
            </View>
            <Text style={styles.txtSecurity}>Security Instructions</Text>
          </View>

          <View style={styles.srcWidthWrap}>
            <>
              <Text style={styles.txtSecurity}>Navigation Tools</Text>
              <Text style={[styles.txtParagraph, {marginTop: 10}]}>
                » Flag: To flag a question (To respond later), choose an answer
                and click on flag button.{'\n'}» Next: By clicking Next button,
                the next question appears. {'\n'}» Previous: By clicking
                'Previous' button, the previous question appears. {'\n'}» End
                Test: By clicking 'End Test' button, the test gets submitted.
              </Text>
            </>
            <>
              <Text style={styles.txtSecurity}>Legend</Text>
              <View style={styles.flexMargin}>
                <View style={styles.smallView}>
                  <Text style={styles.txtNumber}>01</Text>
                </View>
                <Text style={styles.txtInsideSmall}>Attempted</Text>
              </View>
              <View style={styles.flexMargin}>
                <View style={[styles.smallView, {backgroundColor: '#636363'}]}>
                  <Text style={styles.txtNumber}>02</Text>
                </View>
                <Text style={styles.txtInsideSmall}>Unattempted</Text>
              </View>
              <View style={styles.flexMargin}>
                <View style={[styles.smallView, {backgroundColor: '#C23939'}]}>
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
                    {marginTop: 10, lineHeight: 25},
                  ]}>
                  Test Name : {this.state.testDetails.domainName}
                  {'\n'}Allocated Time : {this.state.testDetails.totalTime}
                  {'\n'}No. Of Questions :{' '}
                  {this.state.testDetails.totalQuestion} {'\n'}Correct Answer
                  Carries : {this.state.testDetails.mark} Mark {'\n'}Wrong
                  Answer Deducts : {this.state.testDetails.nmark} Mark
                </Text>
              </View>
            </>
            <>
              <Text style={styles.txtSecurity}>Standard Instructions</Text>
              <Text
                style={[styles.txtParagraph, {marginTop: 10, lineHeight: 25}]}>
                Please contact your Test Administrator in case of power failure
                as the test may be recovered. If test recovery is not possible
                then test will have to be rescheduled. {'\n'}» In case of
                complete Internet failure, submission will not be possible & the
                test will have to be rescheduled. In case of temporary internet
                outage please wait for some time and try to re-submit the test.{' '}
                {'\n'}» If internet speed is unreasonably slow, images and
                tables in the question may take little longer to appear. {'\n'}»
                This is a Multiple Choice Question(MCQ) type Test. You can go
                back to the previous questions. {'\n'}» There is no negative
                marking. {'\n'}» Please attempt all questions. * The test should
                be submitted only when it is completed in all respect.
              </Text>
            </>
          </View>
        </View>
        <View style={styles.bgBlackWrap}>
          <Button
            label="Proceed Now"
            customStyles={styles.btnCustom}
            onPress={() =>
              this.props.navigation.navigate('QuestionRadio', {
                testId: this.state.testId,
              })
            }
          />
          <Text style={styles.txtTerms}>
            Terms and conditions | Privacy Policy
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default HardwarePermissionFailure;
