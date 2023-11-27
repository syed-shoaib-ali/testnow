import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../../../Components/Button/Button';
import styles from './Styles';
import micIcon from '../../../Assets/mic.png';
import internetIcon from '../../../Assets/internet.png';
import mobileIcon from '../../../Assets/mobileIcon.png';
import guardImg from '../../../Assets/guardImg.png';
import Modal from 'react-native-modal';
import Theme from '../../../utils/Theme';
class HardwareTestFailure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: true,
      microphone: false,
      camera: false,
      speed: true,
    };
  }
  toggleModalBtn = async () => {
    try {
      const camGranted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Wheebox App Camera Permission',
          message: 'Wheebox App needs access permissions ',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (camGranted === PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({camera: true});
      }
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Wheebox App Microphone Permission',
          message: 'Wheebox App needs access permissions ',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({microphone: true});
        console.log('MICROPHONE');
      }
    } catch (err) {
      alert(err);
    }
  };
  toggleModalBtn1 = () => {
    this.setState({camera: true});
    this.setState({microphone: true});
    console.log('Camera, Microphone Done');
  };

  render() {
    // this.props.navigation.navigate('QuestionRadio');

    const {microphone, camera, speed} = this.state;
    const testName = this.props.route.params.testName;

    return (
      <ScrollView style={styles.MainView}>
        <View style={styles.topWrap}>
          <Text style={styles.txtTitle}> {testName}</Text>
        </View>

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
          {Platform.OS === 'ios' ? (
            <AntDesign
              name="checkcircle"
              size={Theme.iconSize}
              color={microphone ? Theme.lightGreen : Theme.lightGreen}
            />
          ) : (
            <AntDesign
              name="checkcircle"
              size={Theme.iconSize}
              color={microphone ? Theme.lightGreen : Theme.darkGrey}
            />
          )}
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
              <Text style={[styles.txtMicroPhone, {color: Theme.darkGrey}]}>
                On
              </Text>
            </View>
          </View>
          {Platform.OS === 'ios' ? (
            <AntDesign
              name="checkcircle"
              size={Theme.iconSize}
              color={camera ? Theme.lightGreen : Theme.lightGreen}
            />
          ) : (
            <AntDesign
              name="checkcircle"
              size={Theme.iconSize}
              color={camera ? Theme.lightGreen : Theme.darkGrey}
            />
          )}
        </Card>
        <Card style={styles.srcWidthWrap}>
          <View style={styles.flexRow}>
            <Image source={internetIcon} style={styles.internetIcon} />
            <View style={{paddingHorizontal: Theme.padding}}>
              <Text style={styles.txtMicroPhone}>Internet Speed</Text>
              <Text style={[styles.txtMicroPhone, {color: Theme.darkGrey}]}>
                512 kbps
              </Text>
            </View>
          </View>
          {Platform.OS === 'ios' ? (
            <AntDesign
              name="checkcircle"
              size={24}
              color={speed ? Theme.lightGreen : Theme.lightGreen}
            />
          ) : (
            <AntDesign
              name="checkcircle"
              size={24}
              color={speed ? Theme.lightGreen : Theme.darkGrey}
            />
          )}
        </Card>

        <View style={{paddingVertical: '20%'}}>
          <Button
            label="Proceed Now"
            customStyles={{alignSelf: Theme.align}}
            onPress={() => this.props.navigation.navigate('ImagePick')}
          />
        </View>

        {Platform.OS === 'ios' ? (
          <Modal
            animationIn="slideInUp"
            animationInTiming={300}
            animationOut="bounceOutDown"
            animationOutTiming={300}
            swipeDirection={['down']}
            swipeThreshold={400}
            onSwipeComplete={() => this.setState({isModalVisible: false})}>
            <View style={styles.wraptxtBtn}>
              <View style={styles.wrapContent}>
                <Image source={guardImg} style={styles.guardImg} />
                <Text style={styles.txtBottomLines}>
                  You must allow{' '}
                  <Text
                    style={[styles.txtBottomLines, {fontWeight: Theme.bold}]}>
                    {' '}
                    Wheebox
                  </Text>{' '}
                  to access your camera and microphone to take this test. We are
                  committed to your privacy.
                </Text>
              </View>
              <Button
                label="Agree"
                size={'md'}
                // onPress={() => this.toggleModalBtn()}
                onPress={
                  Platform.OS === 'ios'
                    ? () => this.toggleModalBtn1()
                    : Platform.OS === 'android'
                    ? () => this.toggleModalBtn()
                    : null
                }
              />
            </View>
          </Modal>
        ) : (
          <Modal
            animationIn="slideInUp"
            animationInTiming={300}
            animationOut="bounceOutDown"
            animationOutTiming={300}
            swipeDirection={['down']}
            swipeThreshold={400}
            onSwipeComplete={() => this.setState({isModalVisible: false})}
            isVisible={!(camera && microphone && speed)}>
            <View style={styles.wraptxtBtn}>
              <View style={styles.wrapContent}>
                <Image source={guardImg} style={styles.guardImg} />
                <Text style={styles.txtBottomLines}>
                  You must allow{' '}
                  <Text
                    style={[styles.txtBottomLines, {fontWeight: Theme.bold}]}>
                    {' '}
                    Wheebox
                  </Text>{' '}
                  to access your camera and microphone to take this test. We are
                  committed to your privacy.
                </Text>
              </View>
              <Button
                label="Agree"
                size={'md'}
                // onPress={() => this.toggleModalBtn()}
                onPress={
                  Platform.OS === 'ios'
                    ? () => this.toggleModalBtn1()
                    : Platform.OS === 'android'
                    ? () => this.toggleModalBtn()
                    : null
                }
              />
            </View>
          </Modal>
        )}
      </ScrollView>
    );
  }
}

export default HardwareTestFailure;
