import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import Button from '../../../Components/Button/Button';
import styles from './Styles';
import rotateIcon from '../../../Assets/rotateIcon.png';
import fileIcon from '../../../Assets/fileIcon.png';
import {accessToken} from '../../../apis/secure';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseURL} from '../../../apis/Apis';
import Theme from '../../../utils/Theme';
class TestDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testId: this.props.testId,
      testDetails: '',
    };
  }
  async componentDidMount() {
    let compCode = await AsyncStorage.getItem('comapnyCode');
    // console.log(this.props);
    axios({
      method: 'POST',
      url:
        baseURL +
        'prep/getTestInstruction/' +
        compCode +
        '?testNo=' +
        this.state.testId +
        '&chooseLanguage=English',
      headers: {
        accessToken: accessToken,
      },
    })
      .then(({data}) => {
        if (data.statusCode == 200) {
          this.setState({testDetails: data.testDetails});
        } else {
          alert('data.message', data.message);
        }
      })
      .catch((e) => {
        alert('e', e);
      });
  }

  render() {
    const item = this.state.testDetails;
    return (
      <Card style={styles.srcWidthWrap}>
        <View style={styles.headerWrap}>
          <Image source={fileIcon} style={styles.fileIcon} />
          <Text style={styles.txtMcqs}>{item.testName}</Text>
          <TouchableOpacity onPress={() => this.props.flip(false)}>
            <Image source={rotateIcon} style={styles.rotateIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.setWidthWrap}>
          <Text style={styles.txtTestDetail}>{item.testDetailTitle}</Text>
          <Text style={styles.txtLoremIpsum}>{item.testDetailCaption}</Text>
          <View style={{marginTop: '5%'}}>
            <Text style={styles.txtTestName}>
              Test Name : {item.testName} {'\n'}Allocated Time :{' '}
              {item.totalTime}
              {'\n'}No. Of Questions : {item.totalQuestion} {'\n'}Correct Answer
              Carries : {item.mark} Mark {'\n'}
              Wrong Answer Deducts : {item.nmark} Mark
            </Text>
          </View>
        </View>

        <Button
          label="Start Test"
          customStyles={{alignSelf: Theme.align}}
          onPress={this.props.startTest}
        />
      </Card>
    );
  }
}

export default TestDetails;
