import React, {Component} from 'react';
import {View, Text, StatusBar, Image, ScrollView} from 'react-native';
import styles from './Styles';
import Button from '../../Components/Button/Button';
import axios from 'axios';
import {AirbnbRating} from 'react-native-ratings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {accessToken} from '../../apis/secure';
import {baseURL} from '../../apis/Apis';
import Theme from '../../utils/Theme';
class RatingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Starts: [
        {image: require('../../Assets/starIcon.png')},
        {image: require('../../Assets/starIcon.png')},
        {image: require('../../Assets/starIcon.png')},
        {image: require('../../Assets/starIcon.png')},
        {image: require('../../Assets/starIcon.png')},
      ],
      feebbackQues: [],
      testNumber: this.props.route.params.testNumber,
      keySno: this.props.route.params.keySno,
      compCode: '',
      submitted: false,
      isEmpty: false,
    };
  }
  async componentDidMount() {
    this.setState({compCode: await AsyncStorage.getItem('comapnyCode')});
    console.log('CompCode in rating:>', this.state.compCode);
    this.getFeedbackOptions();
  }
  getFeedbackOptions = async () => {
    let accessToken = 'OG5MTnNzRTNWRXlX';
    const url = baseURL + 'feedback/getQuestions/' + this.state.compCode;
    await axios({
      method: 'POST',
      url,
      headers: {
        accessToken: accessToken,
      },
    })
      .then(async ({data}) => {
        console.log('Feedbackdata=>', data.feebbackQues);
        if (data.feebbackQues.length < 1) {
          console.log('Length is less then 1');
          this.setState({isEmpty: true});
        } else {
          console.log('Length is not less then 1');
          this.setState({isEmpty: false});
        }
        const feebbackQues = data.feebbackQues;
        this.setState({isloading: false, feebbackQues});
      })
      .catch((error) => {
        this.setState({isloading: false});
        console.log(error);
      });
  };

  remove = async () => {
    try {
      await AsyncStorage.clear();
    } catch (exception) {
      console.log('exception=>', exception);
    }
  };

  render() {
    const {feebbackQues} = this.state;
    const rate = (r, i, f) => {
      console.log(f.op1);
      const op1 = f.op1;
      const op2 = f.op2;
      const op3 = f.op3;
      const op4 = f.op4;
      const op5 = f.op5;

      let ans = '';
      if (r == 1) {
        ans = op1;
      }
      if (r == 2) {
        ans = op2;
      }
      if (r == 3) {
        ans = op3;
      }
      if (r == 4) {
        ans = op4;
      }
      if (r == 5) {
        ans = op5;
      }

      let items = [...this.state.feebbackQues];
      let item = {...items[i]};
      items[i] = item;
      item.ans = ans;
      this.setState({feebbackQues: items});
    };

    const submitFeedback = async () => {
      let ans = [];
      feebbackQues.map((f) => {
        ans.push({
          ans: f.ans,
          qno: f.qno,
        });
      });
      const loginId = await AsyncStorage.getItem('encEmail');
      const wheeboxID = await AsyncStorage.getItem('WID');
      const data = {
        loginId,
        wheeboxID,
        ansDetails: ans,
        test_no: this.state.testNumber.toString(),
        keySno: this.state.keySno,
      };
      axios({
        method: 'POST',
        url: baseURL + 'feedback/submit/' + this.state.compCode + '/',
        data: data,
        headers: {
          accessToken: accessToken,
        },
      })
        .then(({data}) => {
          alert('Thank you for your feedback');
          console.log(data);
          this.setState({submitted: true});
        })
        .catch((e) => {});
    };
    return (
      <View style={styles.MainView}>
        <ScrollView>
          <View style={styles.srcWidthWrap}>
            {this.state.submitted === false ? (
              <>
                {this.state.isEmpty === true ? (
                  <>
                    <View>
                      <Image
                        style={styles.mainLogoImg}
                        source={require('../../Assets/mainLogo.jpg')}
                      />
                      <Text
                        style={{
                          ...styles.feedBack,
                          fontSize: Theme.txtHeighest,
                        }}>
                        Thank you for taking your test
                      </Text>
                      <Button
                        label="Return to Home"
                        filledColor={Theme.primary}
                        onPress={() => {
                          this.props.navigation.navigate('LoginScreen'),
                            this.remove();
                        }}
                      />
                    </View>
                  </>
                ) : (
                  <>
                    <Text style={styles.feedBack}>Feedback</Text>
                    {feebbackQues.map((f, index) => {
                      return (
                        <View style={{padding: 5}} key={f.qno}>
                          <Text style={styles.txtQuestion}>{f.qtext}</Text>
                          <View style={styles.flexRow}>
                            <AirbnbRating
                              count={5}
                              defaultRating={0}
                              reviews={[f.op1, f.op2, f.op3, f.op4, f.op5]}
                              size={Theme.iconSize}
                              onFinishRating={(r) => rate(r, index, f)}
                            />
                          </View>
                        </View>
                      );
                    })}
                    <View style={styles.btnCenter}>
                      <Button
                        label="Submit"
                        filledColor="#34D399"
                        onPress={submitFeedback}
                      />
                      <Text style={styles.txtOr}>or</Text>
                    </View>

                    <View>
                      <Button
                        label="Return to Home"
                        filledColor={Theme.primary}
                        onPress={() => {
                          this.props.navigation.navigate('LoginScreen'),
                            this.remove();
                        }}
                      />
                    </View>
                  </>
                )}
              </>
            ) : (
              <View style={styles.txtBtnWrap}>
                <Text style={styles.feedBack}>Thank you for your feedback</Text>
                <Button
                  label="Return to Home"
                  filledColor={Theme.primary}
                  onPress={() => {
                    this.props.navigation.navigate('LoginScreen'),
                      this.remove();
                  }}
                />
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default RatingScreen;
