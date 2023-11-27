import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import teamImg from '../../Assets/teamImg.png';
import phoneIcon from '../../Assets/phoneIcon.png';
import boyIcon from '../../Assets/boyIcon.png';
import camIcon from '../../Assets/camIcon.png';
import nofaceIcon from '../../Assets/nofaceIcon.png';
import notRightFace from '../../Assets/notRightFace.png';
import totalImageClicked from '../../Assets/totalImageClicked.png';
import navigateAway from '../../Assets/navigateAway.png';
import pausedbyproctor from '../../Assets/pausedbyproctor.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './Styles';
class Warnings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMultipleModalVisible: false,
      isUsingMobileVisible: false,
      isCamCoverVisible: false,
      isLookingSideWayVisible: false,
      isNoFaceVisible: false,
      istotalImageClickedVisible: false,
      isnavigateAwayVisible: false,
      ispausedbyproctorVisible: false,
    };
  }
  componentDidMount() {
    if (this.props.warningMessage == 'NFF') {
      this.toggleIsnoFaceBtn();
    } else if (this.props.warningMessage == 'MTOFF') {
      this.toggleMultipleBtn();
    } else if (this.props.warningMessage == 'FNM') {
      this.isnotRightFace();
    } else if (this.props.warningMessage == 'notstraight') {
      this.toggleLookingSideWayBtn();
    } else if (this.props.warningMessage == 'SODF') {
      this.toggleUsingMobileBtn();
    } else {
      this.toggleLookingSideWayBtn();
    }
  }

  togglepausedbyproctorBtn = () => {
    this.setState({
      ispausedbyproctorVisible: !this.state.ispausedbyproctorVisible,
    });
  };

  togglenavigateAwayBtn = () => {
    this.setState({isnavigateAwayVisible: !this.state.isnavigateAwayVisible});
  };
  toggletotalImageClickedBtn = () => {
    this.setState({istotalImageClicked: !this.state.istotalImageClicked});
  };
  isnotRightFace = () => {
    this.setState({isnotRightFaceVisible: !this.state.isnotRightFaceVisible});
  };
  toggleIsnoFaceBtn = () => {
    this.setState({isNoFaceVisible: !this.state.isNoFaceVisible});
  };

  toggleMultipleBtn = () => {
    this.setState({isMultipleModalVisible: !this.state.isMultipleModalVisible});
  };

  toggleUsingMobileBtn = () => {
    this.setState({isUsingMobileVisible: !this.state.isUsingMobileVisible});
  };
  toggleCamCoverBtn = () => {
    this.setState({isCamCoverVisible: !this.state.isCamCoverVisible});
  };
  toggleLookingSideWayBtn = () => {
    this.setState({
      isLookingSideWayVisible: !this.state.isLookingSideWayVisible,
    });
  };

  render() {
    return (
      <View style={styles.MainView}>
        {/* paused by proctor  Modal  */}
        <Modal
          animationIn="slideInUp"
          animationInTiming={300}
          animationOut="bounceOutDown"
          animationOutTiming={300}
          // swipeDirection={['down']}
          onModalHide={this.props.MClose}
          swipeThreshold={400}
          onSwipeComplete={
            (() => this.setState({ispausedbyproctorVisible: false}),
            () => this.setState({switch: !this.state.switch}))
          }
          onBackdropPress={() =>
            this.setState({ispausedbyproctorVisible: false})
          }
          isVisible={this.state.ispausedbyproctorVisible}>
          {/* <AddLocation {...this.props}/> */}
          <View style={styles.viewWrap}>
            <View style={styles.modalWrap}>
              <TouchableOpacity
                style={{alignSelf: 'flex-end'}}
                onPress={this.props.MClose}>
                <AntDesign name="close" size={24} style={styles.iconClose} />
              </TouchableOpacity>
              <Image source={pausedbyproctor} style={styles.imgSetting} />
              <Text style={styles.txtWarning}>Warning!</Text>
              <Text style={styles.txtMultiple}> Paused by Proctor </Text>
            </View>
          </View>
        </Modal>

        {/* paused by proctor End */}

        {/* navigate Away  Modal  */}
        <Modal
          animationIn="slideInUp"
          animationInTiming={300}
          animationOut="bounceOutDown"
          animationOutTiming={300}
          // swipeDirection={['down']}
          onModalHide={this.props.MClose}
          swipeThreshold={400}
          onSwipeComplete={
            (() => this.setState({isnavigateAwayVisible: false}),
            () => this.setState({switch: !this.state.switch}))
          }
          onBackdropPress={() => this.setState({isnavigateAwayVisible: false})}
          isVisible={this.state.isnavigateAwayVisible}>
          {/* <AddLocation {...this.props}/> */}
          <View style={styles.viewWrap}>
            <View style={styles.modalWrap}>
              <TouchableOpacity
                style={{alignSelf: 'flex-end'}}
                onPress={this.props.MClose}>
                <AntDesign name="close" size={24} style={styles.iconClose} />
              </TouchableOpacity>
              <Image source={navigateAway} style={styles.imgSetting} />
              <Text style={styles.txtWarning}>Warning!</Text>
              <Text style={styles.txtMultiple}> Navigate Away Detected </Text>
            </View>
          </View>
        </Modal>

        {/* navigate Away End */}

        {/* totalImageClicked Modal  */}
        <Modal
          animationIn="slideInUp"
          animationInTiming={300}
          animationOut="bounceOutDown"
          animationOutTiming={300}
          swipeDirection={['up', 'down']}
          onModalHide={this.props.MClose}
          swipeThreshold={400}
          onSwipeComplete={
            (() => this.setState({istotalImageClickedVisible: false}),
            () => this.setState({switch: !this.state.switch}))
          }
          onBackdropPress={() =>
            this.setState({istotalImageClickedVisible: false})
          }
          isVisible={this.state.istotalImageClickedVisible}>
          {/* <AddLocation {...this.props}/> */}
          <View style={styles.viewWrap}>
            <View style={styles.modalWrap}>
              <TouchableOpacity
                style={{alignSelf: 'flex-end'}}
                onPress={this.props.MClose}>
                <AntDesign name="close" size={24} style={styles.iconClose} />
              </TouchableOpacity>
              <Image source={totalImageClicked} style={styles.imgSetting} />
              <Text style={styles.txtWarning}>Warning!</Text>
              <Text style={styles.txtMultiple}>Total Images Clicked</Text>
            </View>
          </View>
        </Modal>

        {/* totalImageClicked Modal End */}

        {/* notRightFace Modal  */}
        <Modal
          animationIn="slideInUp"
          animationInTiming={300}
          animationOut="bounceOutDown"
          animationOutTiming={300}
          // swipeDirection={['down']}
          onModalHide={this.props.MClose}
          swipeThreshold={400}
          onSwipeComplete={
            (() => this.setState({isnotRightFaceVisible: false}),
            () => this.setState({switch: !this.state.switch}))
          }
          onBackdropPress={() => this.setState({isnotRightFaceVisible: false})}
          isVisible={this.state.isnotRightFaceVisible}>
          {/* <AddLocation {...this.props}/> */}
          <View style={styles.viewWrap}>
            <View style={styles.modalWrap}>
              <TouchableOpacity
                style={{alignSelf: 'flex-end'}}
                onPress={this.props.MClose}>
                <AntDesign name="close" size={24} style={styles.iconClose} />
              </TouchableOpacity>
              <Image source={notRightFace} style={styles.imgSetting} />
              <Text style={styles.txtWarning}>Warning!</Text>
              <Text style={styles.txtMultiple}>Not Right Face Detected</Text>
            </View>
          </View>
        </Modal>

        {/* notRightFace Modal End */}
        {/* isNoFace Modal  */}
        <Modal
          animationIn="slideInUp"
          animationInTiming={300}
          animationOut="bounceOutDown"
          animationOutTiming={300}
          // swipeDirection={['down']}
          onModalHide={this.props.MClose}
          swipeThreshold={400}
          onSwipeComplete={
            (() => this.setState({isNoFaceVisible: false}),
            () => this.setState({switch: !this.state.switch}))
          }
          onBackdropPress={() => this.setState({isNoFaceVisible: false})}
          isVisible={this.state.isNoFaceVisible}>
          <View style={styles.viewWrap}>
            <View style={styles.modalWrap}>
              <TouchableOpacity
                style={{alignSelf: 'flex-end'}}
                onPress={this.props.MClose}>
                {/*    <AntDesign name="close" size={24} style={styles.iconClose} /> */}
                <AntDesign name="close" size={24} style={styles.iconClose} />
              </TouchableOpacity>
              <Image source={nofaceIcon} style={styles.imgSetting} />
              <Text style={styles.txtWarning}>Warning!</Text>
              <Text style={styles.txtMultiple}>No Face Detected</Text>
            </View>
          </View>
        </Modal>

        {/* isNoFace Modal End */}

        {/* Multiple Modal  */}
        <Modal
          animationIn="slideInUp"
          animationInTiming={300}
          animationOut="bounceOutDown"
          animationOutTiming={300}
          // swipeDirection={['down']}
          onModalHide={this.props.MClose}
          swipeThreshold={400}
          onSwipeComplete={
            (() => this.setState({isMultipleModalVisible: false}),
            () => this.setState({switch: !this.state.switch}))
          }
          onBackdropPress={() => this.setState({isMultipleModalVisible: false})}
          isVisible={this.state.isMultipleModalVisible}>
          {/* <AddLocation {...this.props}/> */}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <View style={styles.modalWrap}>
              <TouchableOpacity
                style={{alignSelf: 'flex-end'}}
                onPress={this.props.MClose}>
                <AntDesign name="close" size={24} style={styles.iconClose} />
              </TouchableOpacity>
              <Image source={teamImg} style={styles.imgSetting} />
              <Text style={styles.txtWarning}>Warning!</Text>
              <Text style={styles.txtMultiple}>Multiple face detected</Text>
            </View>
          </View>
        </Modal>

        {/* Multiple Modal End */}
        {/* Using Mobile Modal Modal  */}
        <Modal
          animationIn="slideInUp"
          animationInTiming={300}
          animationOut="bounceOutDown"
          animationOutTiming={300}
          // swipeDirection={['down']}
          swipeThreshold={400}
          onSwipeComplete={
            (() => this.setState({isUsingMobileVisible: false}),
            () => this.setState({switch: !this.state.switch}))
          }
          onModalHide={this.props.MClose}
          onBackdropPress={() => this.setState({isUsingMobileVisible: false})}
          isVisible={this.state.isUsingMobileVisible}>
          {/* <AddLocation {...this.props}/> */}
          <View style={styles.viewWrap}>
            <View style={styles.modalWrap}>
              <TouchableOpacity
                style={{alignSelf: 'flex-end'}}
                onPress={this.props.MClose}>
                <AntDesign name="close" size={24} style={styles.iconClose} />
              </TouchableOpacity>
              <Image source={phoneIcon} style={styles.imgSetting} />
              <Text style={styles.txtWarning}>Warning!</Text>
              <Text style={styles.txtMultiple}>Candidate using Mobile</Text>
            </View>
          </View>
        </Modal>

        {/* Using Mobile Modal End */}
        {/* Using Cam Cover Modal Modal  */}
        <Modal
          animationIn="slideInUp"
          animationInTiming={300}
          animationOut="bounceOutDown"
          animationOutTiming={300}
          // swipeDirection={['down']}
          swipeThreshold={400}
          onSwipeComplete={
            (() => this.setState({isCamCoverVisible: false}),
            () => this.setState({switch: !this.state.switch}))
          }
          onModalHide={this.props.MClose}
          onBackdropPress={() => this.setState({isCamCoverVisible: false})}
          isVisible={this.state.isCamCoverVisible}>
          {/* <AddLocation {...this.props}/> */}
          <View style={styles.viewWrap}>
            <View style={styles.modalWrap}>
              <TouchableOpacity
                style={{alignSelf: 'flex-end'}}
                onPress={this.props.MClose}>
                <AntDesign name="close" size={24} style={styles.iconClose} />
              </TouchableOpacity>
              <Image source={camIcon} style={styles.imgSetting} />
              <Text style={styles.txtWarning}>Warning!</Text>
              <Text style={styles.txtMultiple}>No face found</Text>
            </View>
          </View>
        </Modal>

        {/* Using Cam Cover Modal End */}
        {/* Using Looking SideWay Modal Modal  */}
        <Modal
          animationIn="slideInUp"
          animationInTiming={300}
          animationOut="bounceOutDown"
          animationOutTiming={300}
          // swipeDirection={['down']}
          swipeThreshold={400}
          onSwipeComplete={
            (() => this.setState({isLookingSideWayVisible: false}),
            () => this.setState({switch: !this.state.switch}))
          }
          onModalHide={this.props.MClose}
          onBackdropPress={() =>
            this.setState({isLookingSideWayVisible: false})
          }
          isVisible={this.state.isLookingSideWayVisible}>
          {/* <AddLocation {...this.props}/> */}
          <View style={styles.viewWrap}>
            <View style={styles.modalWrap}>
              <TouchableOpacity
                style={{alignSelf: 'flex-end'}}
                onPress={this.props.MClose}>
                <AntDesign name="close" size={24} style={styles.iconClose} />
              </TouchableOpacity>
              <Image source={boyIcon} style={styles.imgSetting} />
              <Text style={styles.txtWarning}>Warning!</Text>
              <Text style={styles.txtMultiple}>Candidate looking sideways</Text>
            </View>
          </View>
        </Modal>

        {/* Using Looking SideWay Modal End */}
      </View>
    );
  }
}

export default Warnings;
