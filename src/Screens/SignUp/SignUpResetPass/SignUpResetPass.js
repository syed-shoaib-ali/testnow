import React, {Component} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import bgImg from '../../../Assets/bgImg.png';
import codeImg from '../../../Assets/codeImg.png';
import styles from './Styles';
import InputText from '../../../Components/TextInput/TextInput';
import Button from '../../../Components/Button/Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

class SignUpResetPass extends Component {
  render() {
    return (
      <ImageBackground style={styles.MainView} source={bgImg}>
        <View style={styles.headerWrap}>
          <AntDesign
            name="close"
            size={24}
            color="#BDBDBD"
            onPress={() => this.props.navigation.goBack()}
          />
          <Text style={styles.txtMsg}>Ask a query</Text>
        </View>
        <KeyboardAwareScrollView>
          <View style={styles.srcWidthWrap}>
            <View>
              <InputText placeholder="Name" maxLength={30} isWhite={true} />
              <InputText
                placeholder="Contact Number"
                maxLength={30}
                isWhite={true}
                marginTop={20}
              />
              <InputText
                placeholder="Email ID"
                maxLength={30}
                isWhite={true}
                marginTop={20}
              />
              <InputText
                placeholder="Write Your message"
                maxLength={200}
                isLong={true}
                marginTop={20}
              />
            </View>
            <View style={styles.flexRowWrap}>
              <Image source={codeImg} style={styles.codeImg} />
              <Text style={styles.txtPleaseEnter}>
                Please enter the above{'\n'} 'alphabets and numbers'{'\n'} in
                the box below
              </Text>
            </View>
            <InputText
              placeholder="Enter the above here"
              maxLength={30}
              isWhite={true}
            />
            <Text style={styles.txtGreen}>
              Your query will be responded shortly.
            </Text>
            <Button
              label="Submit"
              isIcon={true}
              customStyles={{
                flexDirection: 'row',
                alignItems: 'center',
                bottom: '15%',
                alignSelf: 'center',
              }}
              onPress={() =>
                this.props.navigation.navigate('SignUpResetPassword')
              }
            />
            <Text style={styles.txtNotSatisfied}>
              Not Satisfied ? Click to contact us
            </Text>
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    );
  }
}

export default SignUpResetPass;
