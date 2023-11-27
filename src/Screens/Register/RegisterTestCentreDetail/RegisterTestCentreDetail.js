import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import bgImg from '../../../Assets/bgImg.png';
import styles from './Styles';
import Header from '../../../Components/Header/Header';
import Button from '../../../Components/Button/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import helpIcon from '../../../Assets/helpIcon.png';
import {Picker} from '@react-native-community/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {companyCode, accessToken} from '../../../apis/secure';
import {baseURL} from '../../../apis/Apis';
class RegisterTestCentreDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statee: 'State',
      district: 'District',
      city: 'City',
      districts: [],
      cities: [],
      states: [],
    };
  }
  saveData = () => {
    AsyncStorage.setItem('statee', this.state.statee);
    AsyncStorage.setItem('district', this.state.district);
    AsyncStorage.setItem('city', this.state.city);
    this.props.navigation.navigate('RegisterSelectTest');
  };

  componentDidMount() {
    axios({
      method: 'POST',
      url: baseURL + 'countryWiseDataAPI/' + companyCode,
      data: {
        compCode: '9999',
        country: 'India',
      },
      headers: {
        accessToken: accessToken,
      },
    })
      .then(({data}) => {
        this.setState({states: data});
      })
      .catch((e) => {
        console.log('====================================');
        console.log(e);
        console.log('====================================');
      });
  }
  render() {
    const onSelectState = (state) => {
      axios({
        method: 'POST',
        url: baseURL + 'countryWiseDataAPI/' + companyCode,
        data: {
          compCode: '9999',
          country: 'India',
          state,
        },
        headers: {
          accessToken: accessToken,
        },
      })
        .then(({data}) => {
          this.setState({districts: data});
          console.log('====================================');
          console.log(data);
          console.log('====================================');
        })
        .catch((e) => {
          alert(e);
        });
    };

    const onSelectDistrict = (district) => {
      axios({
        method: 'POST',
        url: baseURL + 'countryWiseDataAPI/' + companyCode,
        data: {
          compCode: '9999',
          country: 'India',
          state: this.state.statee,
          district,
        },
        headers: {
          accessToken: accessToken,
        },
      })
        .then(({data}) => {
          this.setState({cities: data});
        })
        .catch((e) => {
          alert(e);
        });
    };
    return (
      <ImageBackground style={styles.MainView} source={bgImg}>
        {/* Warap all according to the screen width */}
        <KeyboardAwareScrollView>
          <View style={styles.srcWidthWrap}>
            <Header
              isThreeComponent={true}
              register="Register"
              title="Test Centre Details"
              onPressLeft={() => this.props.navigation.goBack()}
            />
            <View style={styles.srcWidthWrap}>
              <View style={styles.pickerWrap}>
                <Picker
                  selectedValue={this.state.statee}
                  style={styles.pickerStyle}
                  onValueChange={(itemValue, itemIndex) => {
                    this.setState({statee: itemValue});
                    onSelectState(itemValue);
                  }}>
                  <Picker.Item disable label="State" value="State" />
                  {this.state.states.map((s) => (
                    <Picker.Item disable label={s} value={s} />
                  ))}
                </Picker>
              </View>
              <View style={styles.pickerWrap}>
                <Picker
                  selectedValue={this.state.district}
                  style={styles.pickerStyle}
                  onValueChange={(itemValue, itemIndex) => {
                    this.setState({district: itemValue});
                    onSelectDistrict(itemValue);
                  }}>
                  <Picker.Item label="District" value="District" />
                  {this.state.districts.map((s) => (
                    <Picker.Item disable label={s} value={s} />
                  ))}
                </Picker>
              </View>
              <View style={styles.pickerWrap}>
                <Picker
                  selectedValue={this.state.city}
                  style={styles.pickerStyle}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({city: itemValue})
                  }>
                  <Picker.Item label="City" value="City" />
                  {this.state.cities.map((s) => (
                    <Picker.Item disable label={s} value={s} />
                  ))}
                </Picker>
              </View>

              <Button
                label="Next"
                isIcon={true}
                customStyles={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                onPress={() => this.saveData()}
              />

              <View style={styles.helpCenWrap}>
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
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    );
  }
}

export default RegisterTestCentreDetail;
