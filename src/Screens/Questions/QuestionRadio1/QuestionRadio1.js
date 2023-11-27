import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Checkbox} from 'react-native-paper';
import Modal from 'react-native-modal';
import Theme from '../../../utils/Theme';

class QuestionRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      ALLQUESTIONS: [],
      SECTIONNAMES: this.props.route.params.SECTIONNAMES,
      isModalVisible: false,
      sectionList: [
        {title: 'asffvjsd fkankfns Knklnsfkl'},
        {title: 'asffvjsd fkankfns Knklnsfkl'},
        {title: 'luo9yig  sdsdfsdg fkankfns Knklnsfkl'},
        {title: 'asffvjsd fkankfns Knklnsfkl'},
        {title: 'FJG JKBJKB KLKL fkankfns Knklnsfkl'},
      ],
      auto: this.props.route.params.auto,
      testId: this.props.route.params.testNumber,
    };
  }

  componentDidMount() {
    this.setState({ALLQUESTIONS: this.props.route.params.ALLQUESTIONS});
  }
  toggleModalBtn = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  render() {
    const {ALLQUESTIONS, auto, testId, SECTIONNAMES} = this.state;

    return (
      <View style={styles.MainView}>
        <View style={styles.headerWrap}>
          <AntDesign
            name="close"
            size={Theme.iconSize}
            color="#B4B4B4"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <View style={styles.srcWidthWrap}>
          <View style={styles.wrapTopOrd}>
            <View style={[styles.boxWrap, {backgroundColor: '#FFEDAE'}]}>
              <AntDesign name="right" size={17} />
              <Text style={styles.txtAutoNext}>Auto Next</Text>
              <View
                style={
                  Platform.OS == 'ios'
                    ? {borderWidth: 1, width: 34, height: 34}
                    : {}
                }>
                <Checkbox
                  value={this.state.checked}
                  status={auto ? 'checked' : 'unchecked'}
                  onPress={() => {
                    this.props.route.params.setAuto();
                    this.setState({auto: !auto});
                  }}
                />
              </View>
            </View>
            <TouchableOpacity
              style={[styles.boxWrap, {backgroundColor: '#EDEDED'}]}
              onPress={() => this.toggleModalBtn()}>
              <AntDesign name="down" size={17} />
              <Text style={styles.txtAutoNext}>Change Section</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapTopCard}>
            <TouchableOpacity
              style={[styles.boxWrap, {backgroundColor: '#8FC6DE'}]}
              onPress={() =>
                this.props.navigation.navigate('TestInstruction', {testId})
              }>
              <FontAwesome name="list-ul" size={20} />
              <Text style={styles.txtAutoNext}>View Instruction</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.boxWrap, {backgroundColor: '#BFF2A8'}]}
              onPress={() =>
                this.props.navigation.navigate('SignUpHelpCenter')
              }>
              <EvilIcons
                name="question"
                size={Theme.iconSize}
                style={{right: 5}}
              />
              <Text style={[styles.txtAutoNext, {right: 20}]}>Help Center</Text>
            </TouchableOpacity>
          </View>
          {/* FLags */}
          <View style={styles.flagWrap}>
            <FlatList
              numColumns={6}
              data={ALLQUESTIONS}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      this.props.route.params.selectQuestion(index)
                    }
                    key={index.toString()}
                    style={{
                      ...styles.flag,
                      backgroundColor: item.flagged
                        ? Theme.red
                        : item.answer == ''
                        ? Theme.iconGrey
                        : Theme.primary,
                    }}>
                    <Text style={styles.txtIndex}>{index + 1}</Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          {/* <Button label="Flag" /> */}
        </View>

        {this.state.isModalVisible === true ? (
          <>
            <Modal
              animationIn="fadeIn"
              animationInTiming={300}
              animationOut="bounceOutDown"
              animationOutTiming={300}
              swipeDirection={['down']}
              swipeThreshold={400}
              isVisible={true}
              onSwipeComplete={() => this.setState({isModalVisible: false})}>
              <View style={styles.viewWrapHei}>
                <ScrollView>
                  <AntDesign
                    name="close"
                    color={Theme.black}
                    size={Theme.iconSize}
                    style={styles.iconClose}
                    onPress={() => this.toggleModalBtn()}
                  />
                  <Text style={styles.txtSection}>Choose Section </Text>
                  <FlatList
                    data={SECTIONNAMES}
                    style={{height: '50%'}}
                    renderItem={({item, index}) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({isModalVisible: false});
                            this.props.route.params.selectSection(item);
                            this.props.navigation.goBack();
                          }}>
                          <Text style={styles.titleQues}> {item} </Text>
                        </TouchableOpacity>
                      );
                    }}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </ScrollView>
              </View>
            </Modal>

            {/* Modal End */}
          </>
        ) : null}
      </View>
    );
  }
}

export default QuestionRadio;
