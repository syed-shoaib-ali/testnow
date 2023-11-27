import React, {Component, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import bgImg from '../../../Assets/bgImg.png';
import styles from './Styles';
import Header from '../../../Components/Header/Header';
import InputText from '../../../Components/TextInput/TextInput';
import Button from '../../../Components/Button/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Modal from 'react-native-modal';
import helpIcon from '../../../Assets/helpIcon.png';
import {Checkbox} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {companyCode, encryptData} from '../../../apis/secure';
import {baseURL} from '../../../apis/Apis';
import Theme from '../../../utils/Theme';
class RegisterTestCentreDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      selectTest: '',
      isloading: false,
      tests: [],
      testLoading: true,
      seelctedTests: [],
    };
  }
  toggleModalBtn = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  componentDidMount() {
    axios({
      method: 'GET',
      url: baseURL + 'testsDetail/' + companyCode,
      headers: {
        accessToken: '8nLNssE3VEyW',
      },
    })
      .then(({data}) => {
        this.setState({tests: data});
      })
      .catch((e) => {
        alert(e);
      })
      .finally(() => {
        this.setState({testLoading: false});
      });
  }
  render() {
    const submitData = async () => {
      console.log('SUBMIGT');
      this.setState({isloading: true});
      const loginId = await AsyncStorage.getItem('loginId');
      const password = await AsyncStorage.getItem('password');

      const firstName = await AsyncStorage.getItem('fname');
      const lastName = await AsyncStorage.getItem('lname');
      const gender = await AsyncStorage.getItem('gender');

      const state = await AsyncStorage.getItem('statee');
      const country = await AsyncStorage.getItem('district');
      const city = await AsyncStorage.getItem('city');
      const data = {
        loginId,
        firstName,
        lastName,
        dob: '1802-01-16',
        state,
        gender,
        country,
        city,
        assignTests: this.state.selectTest,
        password,
      };

      const val = encryptData(JSON.stringify(data));

      const auth =
        baseURL + 'registration/0275000?val=' + encodeURIComponent(val);

      await axios({
        method: 'POST',
        url: auth,
        headers: {
          accessToken: '8nLNssE3VEyW',
        },
      })
        .then(async ({data}) => {
          console.log('REGISTER ', data);
          if (data.status === 'success') {
            this.setState({isloading: false});
            await AsyncStorage.setItem('email', data.loginId);
            await AsyncStorage.setItem('WID', data.wheeboxid.toString());
            this.props.navigation.replace('ResetPassword', {
              loginId: data.loginId,
            });
          } else {
            alert(data.status);
            this.setState({isloading: false});
          }
        })
        .catch((error) => {
          this.setState({isloading: false});
          console.log(error);
          alert(error);
        });
    };

    const handleStatus = (id) => {
      const tests = this.state.seelctedTests;
      const exist = tests.indexOf(id);
      if (exist == -1) {
        tests.push(id);
        this.setState({selectTest: tests});
      } else {
        tests.splice(exist, 1);
        this.setState({selectTest: tests});
      }
    };
    return (
      <ImageBackground style={styles.MainView} source={bgImg}>
        <KeyboardAwareScrollView>
          <View style={styles.srcWidthWrap}>
            <Header
              isThreeComponent={true}
              register="Register"
              title="Select Test"
              onPressLeft={() => this.props.navigation.goBack()}
            />

            <InputText
              placeholder="Click DropDown to Select Test"
              maxLength={Theme.txtLength}
              flexRow={true}
              edit={false}
              dropdown={() => {
                this.setState({seelctedTests: []});
                this.toggleModalBtn();
              }}
            />

            <Button
              label="Submit"
              isIcon={true}
              check={true}
              customStyles={styles.btnCutonSty}
              onPress={submitData}
            />
            {/* Bottom Button */}
            <View style={{...styles.helpCenWrap, bottom: 10}}>
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
        </KeyboardAwareScrollView>
        <Modal
          animationIn="slideInUp"
          animationInTiming={300}
          animationOut="bounceOutDown"
          animationOutTiming={300}
          // swipeDirection={['down']}
          swipeThreshold={400}
          onSwipeComplete={() => this.setState({isModalVisible: false})}
          onBackdropPress={() => this.setState({isModalVisible: false})}
          isVisible={this.state.isModalVisible}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.wrapIndic}>
              {this.state.testLoading && (
                <ActivityIndicator color={Theme.primary} size="small" />
              )}

              <ScrollView
                style={styles.widthSetting}
                showsVerticalScrollIndicator={false}>
                <AntDesign
                  name="close"
                  size={Theme.iconSize}
                  style={styles.iconClose}
                  onPress={() => this.toggleModalBtn()}
                />
                {this.state.tests.map((t) => {
                  const id = t['Test ID'];
                  const name = t['Test Name'];
                  return (
                    <Item name={name} id={id} handleStatus={handleStatus} />
                  );
                })}
                <View style={styles.wrapSubBtn}>
                  {!this.state.testLoading && (
                    <Button
                      size={'md'}
                      label="Submit"
                      IconStyle={{height: 20, width: 20}}
                      customStyles={styles.btnCustomStyle}
                      onPress={() => this.setState({isModalVisible: false})}
                    />
                  )}
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        </Modal>

        <Modal
          backdropOpacity={0.1}
          animationIn="slideInUp"
          animationInTiming={300}
          animationOut="bounceOutDown"
          animationOutTiming={300}
          swipeDirection={['down']}
          swipeThreshold={400}
          onSwipeComplete={() => this.setState({isloading: false})}
          onBackdropPress={() => this.setState({isloading: false})}
          isVisible={this.state.isloading}>
          <View style={styles.wrapInd}>
            <ActivityIndicator />
          </View>
        </Modal>
      </ImageBackground>
    );
  }
}

const Item = ({name, id, handleStatus}) => {
  const [check, setCheck] = useState(false);
  return (
    <View style={styles.flexRowWrap}>
      <Checkbox
        status={check ? 'checked' : 'unchecked'}
        onPress={() => {
          setCheck(!check);
          handleStatus(id);
        }}
      />
      <Text style={styles.txtOptions}>{name}</Text>
    </View>
  );
};

export default RegisterTestCentreDetail;
