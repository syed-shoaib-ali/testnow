import React, {Component} from 'react';
import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../../../Components/Button/Button';
import styles from './Styles';
import micIcon from '../../../Assets/mic.png';
import internetIcon from '../../../Assets/internet.png';
import mobileIcon from '../../../Assets/rountMobileIcon.png';
import Theme from '../../../utils/Theme';

class TestHardwarePermissionAllow extends Component {
  render() {
    return (
      <ScrollView style={styles.MainView}>
        <View style={styles.topWrap}>
          <Text style={styles.txtTitle}>
            Subjective - Auto / Remoter Proctor
          </Text>
        </View>
        {/* Warap all according to the screen width */}

        <Card style={styles.srcWidthWrap}>
          <View style={styles.flexRow}>
            <Image source={micIcon} style={styles.micImg} />
            <View style={{paddingHorizontal: Theme.padding}}>
              <Text style={styles.txtMicroPhone}>Microphone</Text>
              <Text style={[styles.txtMicroPhone, {color: Theme.darkGrey}]}>
                On
              </Text>
            </View>
          </View>
          <AntDesign
            name="checkcircle"
            size={Theme.iconSize}
            color={Theme.lightGreen}
          />
        </Card>
        <Card style={styles.srcWidthWrap}>
          <View style={styles.flexRow}>
            <Image
              source={mobileIcon}
              style={{
                height: 22,
                width: 24,
              }}
            />
            <View style={{paddingHorizontal: Theme.padding}}>
              <Text style={styles.txtMicroPhone}>Front / Back Camera</Text>
              <Text style={{...styles.txtMicroPhone, color: Theme.darkGrey}}>
                On
              </Text>
            </View>
          </View>
          <AntDesign
            name="checkcircle"
            size={Theme.iconSize}
            color={Theme.lightGreen}
          />
        </Card>

        <Card style={styles.srcWidthWrap}>
          <View style={styles.flexRow}>
            <Image source={internetIcon} style={styles.internetIcon} />
            <View style={{paddingHorizontal: Theme.padding}}>
              <Text style={styles.txtMicroPhone}>Internet Speed</Text>
              <Text style={{...styles.txtMicroPhone, color: Theme.darkGrey}}>
                512 kbps
              </Text>
            </View>
          </View>
          <AntDesign
            name="checkcircle"
            size={Theme.iconSize}
            color={Theme.lightGreen}
          />
        </Card>

        <View style={{paddingVertical: '20%'}}>
          <Button
            label="Proceed Now"
            customStyles={{alignSelf: Theme.align}}
            // onPress={() => this.props.navigation.navigate('QuestionRadio')}
            onPress={() => this.props.navigation.navigate('ImagePick')}
          />
        </View>
      </ScrollView>
    );
  }
}

export default TestHardwarePermissionAllow;
