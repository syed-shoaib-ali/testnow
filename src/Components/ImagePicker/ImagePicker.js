import React, { useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  View,
} from "react-native";
import styles from "./Style";
//Icon for picker
import { launchCamera } from "react-native-image-picker";
import Button from "../Button/Button";
import { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const faceBack = require("../../Assets/faceBack.png");
const faceFront = require("../../Assets/faceFront.png");
const tickImg = require("../../Assets/tickImg.png");
const backId = require("../../Assets/backId.png");
const frontId = require("../../Assets/frontId.png");
const croseImg = require("../../Assets/CroseImg.png");
const ImageIcon = require("../../Assets/tickImg.png");
const ImageIcon1 = require("../../Assets/tickImg.png");
import Modal from "react-native-modal";
import axios from "axios";
import { accessToken } from "../../apis/secure";
import { baseURL } from "../../apis/Apis";

class ImagePick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ImageIcon,
      image1: ImageIcon1,
      nextScreen: false,
      nextScreen1: false,
      filePath: "",
      filePath1: "",
      testId: "",
      testDetails: "",
      isModalVisible: true,
      isModalVisible1: false,
      isCardCheck: false,
      keySno: "",
      wheeboxID: "",
      selfImg: "",
      idImg: "",
      length: 1,
      compCode: "",
    };
  }
  toggleModalBtn = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  toggleModalBtn1 = () => {
    this.setState({
      isModalVisible1: !this.state.isModalVisible1,
    });
    this.setState({ isCardCheck: true });
  };
  async componentDidMount() {
    // this.props.navigation.navigate('WaitingLounge');
    this.setState({ compCode: await AsyncStorage.getItem("comapnyCode") });
    const testId = await AsyncStorage.getItem("testId");
    const wheeboxID = await AsyncStorage.getItem("WID");
    const keySno = await AsyncStorage.getItem("keySno");
    this.setState({ testId, wheeboxID, keySno });
  }
  render() {
    const requestCameraPermission = async () => {
      if (Platform.OS === "android") {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: "Camera Permission",
              message: "App needs camera permission",
            }
          );
          // If CAMERA Permission is granted
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
          console.warn(err);
          return false;
        }
      } else return true;
    };
    const requestExternalWritePermission = async () => {
      if (Platform.OS === "android") {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: "External Storage Write Permission",
              message: "App needs write permission",
            }
          );
          // If WRITE_EXTERNAL_STORAGE Permission is granted
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
          console.warn(err);
          alert("Write permission err", err);
        }
        return false;
      } else return true;
    };

    const captureImage = async (type) => {
      let options = {
        mediaType: type,
        maxWidth: 500,
        maxHeight: 750,
        quality: 1,
        videoQuality: "high",
        durationLimit: 30, //Video max duration in seconds
        saveToPhotos: true,
      };
      let isCameraPermitted = await requestCameraPermission();
      if (isCameraPermitted) {
        launchCamera(options, (response) => {
          if (response.didCancel) {
            alert("User cancelled camera picker");
            return;
          } else if (response.errorCode == "camera_unavailable") {
            alert("Camera not available on device");
            return;
          } else if (response.errorCode == "permission") {
            alert("Permission not satisfied");
            return;
          } else if (response.errorCode == "others") {
            alert(response.errorMessage);
            return;
          }
          this.setState({
            filePath: response.uri,
            image: response,
            nextScreen: true,
          });
        });
      }
    };
    const captureImage1 = async (type) => {
      let options = {
        mediaType: type,
        maxWidth: 500,
        maxHeight: 750,
        quality: 1,
        videoQuality: "high",
        durationLimit: 30, //Video max duration in seconds
        saveToPhotos: true,
      };
      let isCameraPermitted = await requestCameraPermission();
      let isStoragePermitted = await requestExternalWritePermission();
      if (isCameraPermitted && isStoragePermitted) {
        launchCamera(options, (response) => {
          if (response.didCancel) {
            alert("User cancelled camera picker");
            return;
          } else if (response.errorCode == "camera_unavailable") {
            alert("Camera not available on device");
            return;
          } else if (response.errorCode == "permission") {
            alert("Permission not satisfied");
            return;
          } else if (response.errorCode == "others") {
            alert(response.errorMessage);
            return;
          }
          this.setState({
            filePath1: response.uri,
            image1: response,
            nextScreen1: true,
          });
        });
      }
    };

    const uploadImage = async () => {
      const { filePath, filePath1, keySno, testId, wheeboxID } = this.state;
      let params = new FormData();

      let filename = filePath.split("/").pop();
      let filename1 = filePath1.split("/").pop();

      // console.log(filename);

      params.append("selfImg", {
        uri: filePath,
        name: filename,
        type: "image/jpeg",
      });
      params.append("idImg", {
        uri: filePath1,
        name: filename1,
        type: "image/jpeg",
      });
      const url =
        baseURL +
        "approver/sameImages/" +
        this.state.compCode +
        `/?wheeboxID=${wheeboxID}&test_no=${testId}&keySno=${keySno}`;

      axios({
        url,
        method: "POST",
        data: params,
        headers: {
          "Content-Type": "multipart/form-data",
          accessToken: accessToken,
        },
      })
        .then(async ({ data }) => {
          console.log("Image Picker Screen data:=>", data);
          this.props.navigation.navigate("WaitingLounge", {
            testId: this.state.testId,
          });
        })
        .catch((err) => {
          console.log("Error ", err);
          alert(err);
        });
    };

    return (
      <View style={styles.MainView}>
        {this.state.isCardCheck === true ? (
          <>
            <TouchableOpacity onPress={() => captureImage1("photo")}>
              <Image
                source={this.state.image1}
                style={styles.imagePickerIcon}
              />
            </TouchableOpacity>
            <Text style={styles.txtClickIcon}>
              Click on Icon to Capture ID Card Image
            </Text>
          </>
        ) : (
          <>
            <TouchableOpacity onPress={() => captureImage("photo")}>
              <Image source={this.state.image} style={styles.imagePickerIcon} />
            </TouchableOpacity>
            <Text style={styles.txtClickIcon}>
              Click on Icon to Capture Your Image
            </Text>
          </>
        )}

        {this.state.image !== ImageIcon && (
          <>
            {this.state.length === 1 ? (
              <>
                <Button
                  size={"md"}
                  label="Next"
                  customStyles={{ marginTop: "30%" }}
                  onPress={() => {
                    this.toggleModalBtn1(), this.setState({ length: 2 });
                  }}
                />
              </>
            ) : null}
          </>
        )}
        {this.state.image1 !== ImageIcon1 && (
          <>
            <Button
              size={"md"}
              label="Start Test"
              customStyles={{ marginTop: "30%" }}
              onPress={() => console.log(this.props.route)}
              onPress={uploadImage}
            />
          </>
        )}
        <Modal
          animationIn="slideInUp"
          animationInTiming={300}
          animationOut="bounceOutDown"
          animationOutTiming={300}
          swipeDirection={["down"]}
          swipeThreshold={400}
          onSwipeComplete={() => this.setState({ isModalVisible1: false })}
          isVisible={this.state.isModalVisible1}
        >
          <View style={styles.modalMainView}>
            <Text style={styles.txtImageGuid}>ID Card Guidance</Text>
            <View style={styles.rowEvenly}>
              <Image source={frontId} style={styles.imgSize} />
              <Image source={backId} style={styles.imgSize} />
            </View>
            <>
              <View style={styles.flexAlign}>
                <Image source={tickImg} style={styles.imgVerify} />
                <Text style={styles.txtdo}>Dos</Text>
              </View>
              <View style={styles.setAlign}>
                <Text style={styles.txtCap}>
                  Please show your ID like this in front of the camera
                </Text>
              </View>
            </>
            <>
              <View style={styles.flexAlign}>
                <Image source={croseImg} style={styles.imgVerify} />
                <Text style={styles.txtdo}>Don't</Text>
              </View>
              <View style={styles.setAlign}>
                <Text style={styles.txtCap}>
                  Please do not show your ID like this in front of the camera
                </Text>
              </View>
            </>
            <TouchableOpacity
              onPress={() => {
                this.toggleModalBtn1();
                captureImage1("photo");
              }}
              style={styles.btnDone}
            >
              <Text style={styles.txtDone}>Done</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal
          animationIn="slideInUp"
          animationInTiming={300}
          animationOut="bounceOutDown"
          animationOutTiming={300}
          swipeDirection={["down"]}
          swipeThreshold={400}
          onSwipeComplete={() => this.setState({ isModalVisible: false })}
          isVisible={this.state.isModalVisible}
        >
          <View style={styles.modalMainView}>
            <Text style={styles.txtImageGuid}>Image Guidance</Text>
            <View style={styles.rowEvenly}>
              <Image source={faceFront} style={styles.imgSize} />
              <Image source={faceBack} style={styles.imgSize} />
            </View>
            <>
              <View style={styles.flexAlign}>
                <Image source={tickImg} style={styles.imgVerify} />
                <Text style={styles.txtdo}>Dos</Text>
              </View>
              <View style={styles.setAlign}>
                <Text style={styles.txtCap}>
                  Sit straight in front of the camera. There should be proper
                  lighting on your face.
                </Text>
              </View>
            </>
            <>
              <View style={styles.flexAlign}>
                <Image source={croseImg} style={styles.imgVerify} />
                <Text style={styles.txtdo}>Don't</Text>
              </View>
              <View style={styles.setAlign}>
                <Text style={styles.txtCap}>
                  Do not look away. Your face should not be outside the camera
                  frame.
                </Text>
              </View>
            </>
            <TouchableOpacity
              onPress={() => {
                this.toggleModalBtn();
                captureImage("photo");
              }}
              style={styles.btnDone}
            >
              <Text style={styles.txtDone}>Done</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}
export default ImagePick;
