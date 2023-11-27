import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './Styles';
import Header from '../../../Components/Header/Header';
import {accessToken} from '../../../apis/secure';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseURL} from '../../../apis/Apis';
class TestInstruction extends Component {
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
      testId: '',
      testDetails: '',
      testName: '',
      termChecked: false,
      SI: '',
    };
  }
  async componentDidMount() {
    const SI = await AsyncStorage.getItem('SI');
    this.setState({SI});
    const key = this.props.route.params.testId.toString();
    const testName = this.props.route.params.testName;
    this.setState({testName});
    await AsyncStorage.setItem('testId', key);
    this.setState({testId: key});
    let compCode = await AsyncStorage.getItem('comapnyCode');

    axios({
      method: 'POST',
      url:
        baseURL +
        'prep/getTestInstruction/' +
        compCode +
        '?testNo=' +
        key +
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
    const {termChecked, SI} = this.state;
    return (
      <>
        <ScrollView style={styles.MainView}>
          <Header
            isIconTitle={true}
            backIcon="arrowleft"
            title="Test Instructions"
            onPress={() => this.props.navigation.goBack()}
          />

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
                  Test Name : {this.state.testDetails.testName}
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
                {SI}
              </Text>
            </>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default TestInstruction;
