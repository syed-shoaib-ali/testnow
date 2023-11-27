import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './Styles';
import {Card} from 'react-native-shadow-cards';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import capsuleImg from '../../../Assets/capsuleImg.png';
import PenIcon from '../../../Assets/PenIcon.png';
import cameraIcon from '../../../Assets/cameraIcon.png';
import Theme from '../../../utils/Theme';

class SubjectiveQuestionRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.MainView}>
        {/* Header Start*/}

        <View style={styles.headerWrap}>
          <FontAwesome
            name="list-ul"
            size={Theme.iconSize}
            onPress={() => this.props.navigation.navigate('QuestionRadio1')}
          />
          <ImageBackground source={capsuleImg} style={styles.capsuleImg}>
            <Ionicons name="alarm-outline" color={Theme.white} size={18} />
            <Text style={styles.time}>01:22</Text>
          </ImageBackground>
          <Card style={styles.circleCard} />
        </View>
        {/* Header End*/}
        <View style={styles.srcWidthWrap}>
          <View style={styles.wrapQuestion}>
            <Text style={styles.txtMCQ}>Subjective - Q2 / Q51</Text>
            <Text style={styles.txtmcqsQues}>
              As person starts the business as if the business will continue for
              ever. Which is this concept?
            </Text>
          </View>
          {/* Slider*/}
          <View style={styles.IconImgWrap}>
            <TouchableOpacity style={styles.imgBtn}>
              <Image source={PenIcon} style={Theme.imgPen} />
            </TouchableOpacity>

            <Text style={styles.txtCaption}>Slide to answer by typing</Text>
          </View>
          <View style={styles.IconImgWrap}>
            <TouchableOpacity style={styles.imgBtn}>
              <Image source={cameraIcon} style={Theme.imgPen} />
            </TouchableOpacity>

            <Text style={styles.txtCaption}>
              Upload answersheet using camera
            </Text>
          </View>

          {/* Bottom Buttons Start */}
          <View style={styles.absView}>
            <View style={styles.GreenBtns}>
              <View style={styles.circleWrap}>
                <AntDesign
                  name="arrowleft"
                  size={Theme.iconSize}
                  color={Theme.white}
                />
              </View>
              <TouchableOpacity
                style={styles.circleWrap}
                onPress={() =>
                  alert('Apis Implementation is in process please wait')
                }>
                <AntDesign
                  name="arrowright"
                  size={Theme.iconSize}
                  color={Theme.white}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.GreenBtns}>
              <TouchableOpacity
                style={styles.EndTestWrap}
                onPress={() => this.props.navigation.navigate('LoginScreen')}>
                <Text style={styles.txtEndTest}>End Test</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ChatWithProctor}
                onPress={() =>
                  this.props.navigation.navigate('QuestionRadioMesseges')
                }>
                <Text style={styles.txtEndTest}>
                  Chat With Proctor - Richard
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Bottom Buttons End */}
        </View>
      </View>
    );
  }
}

export default SubjectiveQuestionRadio;
