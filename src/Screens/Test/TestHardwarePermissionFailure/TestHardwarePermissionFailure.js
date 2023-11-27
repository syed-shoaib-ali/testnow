import React, {Component} from 'react';
import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import Button from '../../../Components/Button/Button';
import styles from './Styles';
import micIcon from '../../../Assets/mic.png';
import cautionIcon from '../../../Assets/caution.png';
import internetIcon from '../../../Assets/internet.png';
import mobileIcon from '../../../Assets/rountMobileIcon.png';
import Theme from '../../../utils/Theme';

class TestHardwarePermissionFailure extends Component {
  render() {
    return (
      <ScrollView style={styles.MainView}>
        <View style={styles.topWrap}>
          <Text style={styles.txtTitle}>
            {' '}
            Subjective - Auto / Remote Proctor
          </Text>
        </View>
        {/* Warap all according to the screen width */}

        <Card style={styles.srcWidthWrap}>
          <View style={styles.flexRow}>
            <Image source={micIcon} style={styles.micImg} />
            <View style={{paddingHorizontal: Theme.padding}}>
              <Text style={styles.txtMicroPhone}>Microphone</Text>
              <Text style={styles.txtAllowAccess}>Allow the access</Text>
            </View>
          </View>
          <View style={styles.flexRow}>
            <Image source={cautionIcon} style={styles.cautionImg} />
            <View style={{paddingHorizontal: Theme.padding}}>
              <Text style={styles.txtSubTitle}>
                We recommed to check our{' '}
                <Text
                  style={[
                    styles.txtSubTitle,
                    {textDecorationLine: 'underline'},
                  ]}>
                  help guide
                </Text>{' '}
                to solve common camera issues
              </Text>
            </View>
          </View>
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
              <Text style={styles.txtMicroPhone}>Front Camera</Text>
              <Text style={styles.txtAllowAccess}>Camera doesn’t work</Text>
            </View>
          </View>
          <View style={styles.flexRow}>
            <Image source={cautionIcon} style={styles.cautionImg} />
            <View style={{paddingHorizontal: Theme.padding}}>
              <Text style={styles.txtSubTitle}>
                We recommed to check our{' '}
                <Text
                  style={[
                    styles.txtSubTitle,
                    {textDecorationLine: 'underline'},
                  ]}>
                  help guide
                </Text>{' '}
                to solve common camera issues
              </Text>
            </View>
          </View>
        </Card>
        <Card style={styles.srcWidthWrap}>
          <View style={styles.flexRow}>
            <Image source={internetIcon} style={styles.internetIcon} />
            <View style={{paddingHorizontal: Theme.padding}}>
              <Text style={styles.txtMicroPhone}>Internet Speed</Text>
              <Text style={styles.txtMicroPhone}>512 kbps</Text>
            </View>
          </View>
          <View style={styles.flexRow}>
            <Image source={cautionIcon} style={styles.cautionImg} />
            <View style={{paddingHorizontal: Theme.padding}}>
              <Text style={styles.txtSubTitle}>
                Internet speed is not so good. Recommended to use at least 1Mbps
                internet.
              </Text>
            </View>
          </View>
        </Card>
        <View style={{paddingVertical: '20%'}}>
          <Button
            label="Proceed Now"
            customStyles={{alignSelf: Theme.align}}
            onPress={() =>
              this.props.navigation.navigate('TestHardwarePermissionAllow')
            }
          />
        </View>
      </ScrollView>
    );
  }
}

export default TestHardwarePermissionFailure;
