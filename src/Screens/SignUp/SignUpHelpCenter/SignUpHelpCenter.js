import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking,
} from 'react-native';
import styles from './Styles';
import {Card} from 'react-native-shadow-cards';
import phIcon from '../../../Assets/phIcon.png';
import noteImg from '../../../Assets/noteImg.png';
import questionImg from '../../../Assets/questionImg.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
class SignUpHelpCenter extends Component {
  makeCall = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${+911206740105}';
    } else {
      phoneNumber = 'telprompt:${+911206740105}';
    }

    Linking.openURL(phoneNumber);
  };
  makeEmail = () => {
    Linking.openURL('mailto:support@wheebox.com');
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
          <Text style={styles.txtMsg}>Help Center</Text>
        </View>
        {/* Header End*/}
        <Card style={styles.boxCardWrap}>
          <Text style={styles.txtTalk}>Talk To Us</Text>
          <Text style={styles.txtSupport}>Support Center </Text>
          <Image source={phIcon} style={styles.imgPhIcon} />
          <TouchableOpacity
            style={styles.MakeCalWrap}
            onPress={() => this.makeCall()}>
            <Text style={styles.txtMakeCall}>Make a call</Text>
          </TouchableOpacity>
        </Card>
        <Card style={styles.boxCardWrap}>
          <Text style={styles.txtTalk}>Write to Us</Text>
          <Text style={styles.txtSupport}>Support Center</Text>
          <Image
            source={noteImg}
            style={[styles.imgPhIcon, {height: hp('8%'), width: wp('16%')}]}
          />
          <TouchableOpacity
            style={styles.MakeCalWrap}
            onPress={() => this.makeEmail()}>
            <Text style={styles.txtMakeCall}>Email Us</Text>
          </TouchableOpacity>
        </Card>
        <Card style={styles.boxCardWrap}>
          <Text style={styles.txtTalk}>FAQs</Text>
          <Text style={styles.txtSupport}>Support Center</Text>
          <Image
            source={questionImg}
            style={[styles.imgPhIcon, {height: hp('8%'), width: wp('16%')}]}
          />
          <TouchableOpacity
            style={styles.MakeCalWrap}
            onPress={() => this.props.navigation.navigate('SignUpFaqs')}>
            <Text style={styles.txtMakeCall}>FAQS List</Text>
          </TouchableOpacity>
        </Card>
      </ScrollView>
    );
  }
}

export default SignUpHelpCenter;
