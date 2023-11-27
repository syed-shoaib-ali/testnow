import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  FlatList,
  Platform,
  PermissionsAndroid,
  Alert,
  ScrollView,
  BackHandler,
  Dimensions,
  Modal,
} from "react-native";
import HTML from "react-native-render-html";
import TableRenderer, { tableModel } from "@native-html/table-plugin";
import WebView from "react-native-webview";
import styles from "./Styles";
import { Card } from "react-native-shadow-cards";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import { RadioButton } from "react-native-paper";
import { accessToken } from "../../../apis/secure";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { encryptData } from "../../../apis/secure";
import PenIcon from "../../../Assets/PenIcon1.png";
import cameraIcon from "../../../Assets/cameraIcon1.png";
import { launchCamera } from "react-native-image-picker";
import { FAB } from "react-native-paper";
import SwipeButton from "rn-swipe-button";
import Fontisto from "react-native-vector-icons/Fontisto";
import { RNCamera } from "react-native-camera";
import Warnings from "../../Warnings/Warnings";
import { CommonActions } from "@react-navigation/native";
import Theme from "../../../utils/Theme";
import { baseURL } from "../../../apis/Apis";
import VideoPreview from "../../Test/VideoPreview/VideoPreview";
import Video from "react-native-video";
import NetWorkError from "../../../utils/NetWorkError";
import BackgroundTimer from "react-native-background-timer";
import { ProcessingManager } from "react-native-video-processing";
const { width } = Dimensions.get("window");
class QuestionRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlQuestions: "",
      checked: "",
      testId: "",
      testDetails: "",
      testData: "",
      sectionWiseDisplayQuestion: "",
      ALLQUESTIONS: [],
      selectedQuestion: 0,
      cukId: "",
      keySno: "",
      testNumber: "",
      testStartTime: "",
      sectionSequence: [],
      showInput: false,
      showImages: false,
      imgUplaoding: false,
      videoProcessing: false,
      time: 60000,
      auto: false,
      SECTIONNAMES: [],
      showVideo: false,
      email: "",
      proctoringOptions: "",
      activeTimer: true,
      warningMessage: "",
      proctoringWarning: "off",
      compCode: "",
      modalVisible: true,
      imgSource: "",
      intoHTML: "",
      showVideoModal: false,
      currentVideoResponse: "",
      shouldSaveLocally: false,
      timerSave: 0,
      showTimer: false,
      networkError: false,
      timer: 300,
      wheeboxId: "",
      hardStopTimingInSeconds: null,
    };
  }

  async componentDidMount() {
    BackgroundTimer.runBackgroundTimer(() => {
      if (this.state.activeTimer) {
        this.setState(() => ({ timer: this.state.timer - 1 }));
      }
    }, 1000);

    this.setState({
      compCode: await AsyncStorage.getItem("comapnyCode"),
      showTimer: false,
    });
    const allowResumeTestMinutes =
      this.props.route.params?.allowResumeTestMinutes;
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
    const testId = await AsyncStorage.getItem("testId");
    const isResume = await AsyncStorage.getItem(testId);
    const savedTime = await AsyncStorage.getItem(testId + "SavedTime");
    const now = new Date().getTime();
    const timedif = now - savedTime;
    const minsAgo = Math.round(timedif / 60000);
    const wheeboxId = await AsyncStorage.getItem("WID");

    const time = await AsyncStorage.getItem("time");
    const email = await AsyncStorage.getItem("simpleEmail");
    const imagesCaptureTime = await AsyncStorage.getItem("imagesCaptureTime");
    const proctoringOptions = await AsyncStorage.getItem("proctoringOptions");
    const proctoringWarning = await AsyncStorage.getItem("proctoringWarning");

    if (
      proctoringOptions == "SVSSICSFT" ||
      proctoringOptions == "SVSSICSFTSOD"
    ) {
      if (imagesCaptureTime) {
        this.interval = setInterval(() => {
          console.log("ME");
          this.takePicture();
          console.log(
            "CAPTURE IMAGES AFTER EVERY",
            parseInt(imagesCaptureTime)
          );
        }, parseInt(imagesCaptureTime));
      }
    }

    if (isResume && minsAgo < allowResumeTestMinutes) {
      let obj = JSON.parse(isResume);
      obj.time = obj.timerSave;

      this.setState(obj);
      this.setState({ shouldSaveLocally: true, showTimer: true });
      this.updateLogs();

      return;
    } else {
      if (minsAgo > allowResumeTestMinutes && isResume) {
        const {
          cukId,
          keySno,
          testNumber,
          wheeboxId,
          testStartTime,
          sectionSequence,
        } = this.state;

        var today = new Date();
        var testEndTime =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate() +
          " " +
          today.getHours() +
          ":" +
          today.getMinutes() +
          ":" +
          today.getSeconds();

        let allQuestions = [];
        let flagged = 0;

        this.state.ALLQUESTIONS.map((q) => {
          let answer = "";
          if (q.answer != "" && q.qflag == 1) {
            if (q.answer == q.op1) {
              answer = "a";
            }
            if (q.answer == q.op2) {
              answer = "b";
            }
            if (q.answer == q.op3) {
              answer = "c";
            }
            if (q.answer == q.op4) {
              answer = "d";
            }
            if (q.answer == q.op5) {
              answer = "e";
            }
            if (q.answer == q.op6) {
              answer = "f";
            }
          }
          if (q.flagged) {
            flagged = flagged + 1;
          }

          const question = {
            timeTakenPerQues: "120",
            sectionName: q.sectionName,
            answer: q.qflag == 1 ? answer : q.answer,
            sno: q.qSno,
          };

          const decQuestions = encryptData(JSON.stringify(question));
          allQuestions.push(decQuestions);
        });

        const sectionWiseAnswerDetails = {
          allQuestions,
        };

        var mydata = {
          cukId,
          keySno: keySno.toString(),
          testNumber: testNumber.toString(),
          wheeboxId,
          testStartTime,
          sectionSequence,
          testEndTime,
          sectionWiseAnswerDetails,
        };

        const finalData = {
          data: mydata,
        };
        this.submitTestDirectly(finalData, true);
      }
    }

    await AsyncStorage.setItem(
      this.state.testId + "StartTestTime",
      new Date().getTime().toString()
    );
    this.setState({
      shouldSaveLocally: true,
    });

    this.setState({
      testId,
      time: time * 60,
      email,
      proctoringOptions,
      proctoringWarning,
      timer: time * 60,
    });
    const data = {
      wheeboxId,
      chooseLanguage: "English",
      testNo: this.state.testId.toString(),
    };
    axios({
      method: "POST",
      url: baseURL + "prep/getTestQuestions/" + this.state.compCode,
      data,
      headers: {
        accessToken: accessToken,
      },
    })
      .then(({ data }) => {
        const info = data.data;
        console.log(info.hardStopTimingInSeconds, "  From New API");
        const sectionWiseDisplayQuestion =
          info.finalData.sectionWiseDisplayQuestion;
        let ALLQUESTIONS = [];
        let MULTIPLECH = [];
        let SUBJECTIVES = [];
        let SECTIONNAMES = info.finalData.sectionSequence;
        this.setState({ SECTIONNAMES });

        if (sectionWiseDisplayQuestion != null) {
          ALLQUESTIONS = sectionWiseDisplayQuestion;
          MULTIPLECH = sectionWiseDisplayQuestion.filter((q) => q.qflag == 3);
          SUBJECTIVES = sectionWiseDisplayQuestion.filter((q) => q.qflag == 4);
        } else {
          this.setState({
            testData: info,
            cukId: info.cukId,
            keySno: info.keySno,
            testNumber: info.testNumber,
            wheeboxId,
            testStartTime: info.testStartTime,
            sectionSequence: info.finalData.sectionSequence,
            SUBJECTIVES,
            MULTIPLECH,
          });
        }

        this.setState({
          testData: info,
          sectionWiseDisplayQuestion,
          ALLQUESTIONS,
          cukId: info.cukId,
          keySno: info.keySno,
          testNumber: info.testNumber,
          wheeboxId,
          testStartTime: info.testStartTime,
          sectionSequence: info.finalData.sectionSequence,
          hardStopTimingInSeconds: info.hardStopTimingInSeconds || null,
        });
      })
      .catch((e) => {
        alert(e);
        console.log(e);
      });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.backHandler.remove();
    BackgroundTimer.stopBackgroundTimer();
  }

  componentDidUpdate() {
    this.saveLocally();
    if (this.state.timer === 1) {
      this.submitTest("auto");
      BackgroundTimer.stopBackgroundTimer();
    }
  }

  submitTest = (type) => {
    const {
      cukId,
      keySno,
      testNumber,
      wheeboxId,
      testStartTime,
      sectionSequence,
    } = this.state;

    var today = new Date();
    var testEndTime =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate() +
      " " +
      today.getHours() +
      ":" +
      today.getMinutes() +
      ":" +
      today.getSeconds();

    let allQuestions = [];
    let flagged = 0;

    this.state.ALLQUESTIONS.map((q) => {
      let answer = "";
      if (q.answer != "" && q.qflag == 1) {
        if (q.answer == q.op1) {
          answer = "a";
        }
        if (q.answer == q.op2) {
          answer = "b";
        }
        if (q.answer == q.op3) {
          answer = "c";
        }
        if (q.answer == q.op4) {
          answer = "d";
        }
        if (q.answer == q.op5) {
          answer = "e";
        }
        if (q.answer == q.op6) {
          answer = "f";
        }
      }
      if (q.flagged) {
        flagged = flagged + 1;
      }

      const question = {
        timeTakenPerQues: "120",
        sectionName: q.sectionName,
        answer: q.qflag == 1 ? answer : q.answer,
        sno: q.qSno,
      };

      const decQuestions = encryptData(JSON.stringify(question));
      allQuestions.push(decQuestions);
    });

    const sectionWiseAnswerDetails = {
      allQuestions,
    };

    var data = {
      cukId,
      keySno: keySno.toString(),
      testNumber: testNumber.toString(),
      wheeboxId,
      testStartTime,
      sectionSequence,
      testEndTime,
      sectionWiseAnswerDetails,
    };

    const finalData = {
      data: data,
    };

    if (type == "auto") {
      this.submitTestDirectly(finalData);
      return;
    }

    if (flagged > 0) {
      Alert.alert(
        "Warning!",
        "You have " + flagged + " flagged questions!  Do you want to submit?",
        [
          {
            text: "No",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "Yes",
            onPress: () => {
              this.confirmSubmission(finalData);
            },
          },
        ]
      );
    } else {
      this.confirmSubmission(finalData);
    }
  };

  saveLocally = async () => {
    if (this.state.testId != "" && this.state.shouldSaveLocally) {
      await AsyncStorage.setItem(this.state.testId, JSON.stringify(this.state))
        .then(async () => {
          await AsyncStorage.setItem(
            this.state.testId + "SavedTime",
            new Date().getTime().toString()
          );
        })
        .catch((e) => {
          alert(
            "We are unable to implement your resume test funtionality." +
              e.toString()
          );
        });
    }
  };

  takePicture = async () => {
    if (!this.state.activeTimer) {
      return;
    }
    const {
      cukId,
      keySno,
      testNumber,
      wheeboxId,
      testStartTime,
      sectionSequence,
      time,
      email,
      proctoringOptions,
    } = this.state;

    if (this.camera) {
      const img = await this.camera.takePictureAsync({
        quality: 0.8,
        base64: true,
        imageType: "jpeg",
        width: 320,
        orientation: "portrait",
        fixOrientation: true,
        forceUpOrientation: true,
      });
      this.setState({ imgSource: img.uri });
      const data = {
        wheeboxId: parseInt(wheeboxId),
        testId: parseInt(testNumber),
        testStartTime,
        totalWarningCounter: 0,
        timeRemaining: "90:00:05",
        latestScreenShotName: "",
        loginId: email,
        noiceDetected: "false",
        fnm: "true",
        sodf: "false",
        proctoringOptions,
        noFace: 0,
        doubleFace: 0,
        notRightFace: 0,
        totalImageClicked: 1,
        holdingMobile: 0,
        faceMovment: 0,
        navigateAway: 0,
        pausedbyproctor: 0,
        proctorAssignmentType: "none",
        imageData: `data:image/jpeg;base64,${img.base64}`,
      };

      const url =
        baseURL + "wheebox/trackMyFace/" + this.state.compCode + "/" + keySno;

      axios({
        url,
        method: "POST",
        data,
        headers: {
          accessToken: accessToken,
        },
      })
        .then(async ({ data }) => {
          console.log("WARNINGS ", this.state.proctoringWarning);
          if (data.message != "ok" && this.state.proctoringWarning != "off") {
            this.setState({ activeTimer: false, warningMessage: data.message });
          }
        })
        .catch((err) => {
          console.log("Error ", err);
        });
    }
  };

  backAction = () => {
    Alert.alert("Alert!", "Test is in Progress, You Cannot go Back !", [
      {
        text: "Ok",
        onPress: () => null,
        style: "cancel",
      },
    ]);
    return true;
  };

  submitTestDirectly = (finalData, isResume) => {
    axios({
      method: "POST",
      url: isResume
        ? baseURL + "prep/resumeTestPrep/" + this.state.compCode
        : baseURL + "prep/endTestPrep/" + this.state.compCode,
      data: JSON.stringify(finalData),
      headers: {
        accessToken: accessToken,
        "Content-Type": "application/json",
      },
    })
      .then(async ({ data }) => {
        await AsyncStorage.removeItem(this.state.testId);
        await AsyncStorage.removeItem(this.state.testId + "SavedTime");
        if (isResume) {
          console.log("SYNC SUCCESSFULLT ", data);
          return;
        }
        this.props.navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              { name: "LoginScreen" },
              {
                name: "Sumbitted",
                params: {
                  testNumber: this.state.testNumber,
                  keySno: this.state.keySno,
                },
              },
            ],
          })
        );
      })
      .catch((e) => {
        alert(e);
      });
  };

  confirmSubmission = (finalData) => {
    Alert.alert("Warning!", "Do you really want to submit your test?", [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          this.submitTestDirectly(finalData);
        },
      },
    ]);
  };

  updateLogs = () => {
    axios({
      method: "POST",
      url: baseURL + "logjourney/logs/" + this.state.compCode,
      data: {
        keySno: this.state.keySno.toString(),
        logmsg: "Candidate resumed test",
        wheeboxId: this.state.wheeboxId,
      },
      headers: {
        accessToken: accessToken,
        "Content-Type": "application/json",
      },
    })
      .then(async ({ data }) => {
        console.log("Logs UPDATED ", data);
      })
      .catch((e) => {
        console.log(e, " ERROR WHILE UPDATE LOGS TO SERVER ");
      });
  };

  render() {
    const {
      ALLQUESTIONS,
      showInput,
      showImages,
      imgUplaoding,
      selectedQuestion,
      time,
      auto,
      testNumber,
      SECTIONNAMES,
      showVideo,
      proctoringOptions,
      activeTimer,
      warningMessage,
      modalVisible,
      imgSource,
      showVideoModal,
      currentVideoResponse,
      showTimer,
      timerSave,
      networkError,
      videoProcessing,
    } = this.state;

    const QUESTION = ALLQUESTIONS[this.state.selectedQuestion];
    const htmlProps = {
      WebView,
      renderers: {
        table: TableRenderer,
      },
      renderersProps: {
        table: {
          // Put the table config here
        },
      },
      customHTMLElementModels: {
        table: tableModel,
      },
    };

    const handleChangeQuestion = (type) => {
      if (type === "add") {
        if (this.state.selectedQuestion + 1 >= ALLQUESTIONS.length) {
          this.submitTest();
          return;
        }
        this.setState(
          {
            selectedQuestion: this.state.selectedQuestion + 1,
            checked: QUESTION.answer,
          },
          this.forceUpdate()
        );
      } else {
        if (this.state.selectedQuestion - 1 < 0) {
          alert("NO QUESTIONS ENDED....");
          return;
        }
        this.setState({
          selectedQuestion: this.state.selectedQuestion - 1,
          checked: QUESTION.answer,
        });
      }
      this.setState({ showInput: false, showImages: false });
    };
    const selectValue = (checked) => {
      let items = [...this.state.ALLQUESTIONS];
      let item = { ...items[this.state.selectedQuestion] };
      item.answer = checked;
      items[this.state.selectedQuestion] = item;
      this.setState({ checked, ALLQUESTIONS: items });
      if (auto && QUESTION.qflag == "1") {
        if (selectedQuestion + 1 < ALLQUESTIONS.length)
          this.setState({
            showInput: false,
            showImages: false,
            selectedQuestion: selectedQuestion + 1,
          });
      }
    };
    const changeSubjectiveValue = (answer, QUESTION) => {
      let items = [...this.state.ALLQUESTIONS];
      let item = { ...items[this.state.selectedQuestion] };
      item.answer = answer;
      items[this.state.selectedQuestion] = item;
      this.setState({ ALLQUESTIONS: items, showInput: false });
    };

    const selectImage = (by) => {
      if (by == "byVideo") {
        this.setState({ showVideo: true });
        captureImage(true);
      } else {
        this.setState({ showImages: true });
        captureImage();
      }
    };
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
    const captureImage = async (byVideo) => {
      let options = {
        mediaType: byVideo ? "video" : "photo",
        saveToPhotos: true,
        quality: 0.2,
      };

      const options2 = {
        width: 426,
        height: 240,
        bitrateMultiplier: 3,
        saveToCameraRoll: true, // default is false, iOS only
        saveWithCurrentDate: true, // default is false, iOS only
        minimumBitrate: 300000,
      };

      let isCameraPermitted = await requestCameraPermission();
      let isStoragePermitted = await requestExternalWritePermission();
      if (isCameraPermitted && isStoragePermitted) {
        launchCamera(options, async (response) => {
          if (response.didCancel) {
            if (QUESTION.images == null) {
              this.setState({ showImages: false });
              selectValue("");
            }
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

          if (byVideo) {
            this.setState({ videoProcessing: true });
            const dataa = await ProcessingManager.compress(
              response.uri,
              options2
            );

            this.setState({
              currentVideoResponse: {
                ...response,
                compressedVideo: dataa.source,
              },
            });
            this.setState({
              showVideoModal: true,
            });
          } else {
            uploadMedia(false, response);
          }
        });
      }
    };
    const selectQuestion = (i) => {
      this.setState({
        showInput: false,
        showImages: false,
        selectedQuestion: i,
      });
      this.props.navigation.goBack();
    };
    const flagQuestion = () => {
      let items = [...this.state.ALLQUESTIONS];
      let item = { ...items[this.state.selectedQuestion] };
      if (item.flagged) {
        item.flagged = false;
      } else {
        item.flagged = true;
      }

      items[this.state.selectedQuestion] = item;
      this.setState({ ALLQUESTIONS: items });
    };
    const setAuto = () => {
      this.setState({ auto: !auto });
    };
    const selectSection = (s) => {
      for (let index = 0; index < ALLQUESTIONS.length; index++) {
        const Question = ALLQUESTIONS[index];
        if (Question.sectionName == s) {
          this.setState({
            showInput: false,
            showImages: false,
            selectedQuestion: index,
          });
          return;
        }
      }
    };
    const MClose = () => {
      this.setState({ warningMessage: "", activeTimer: true });
    };
    const uploadMedia = (byVideo, pick) => {
      this.setState({ showVideoModal: false });
      const {
        cukId,
        keySno,
        testNumber,
        wheeboxId,
        testStartTime,
        sectionSequence,
        time,
      } = this.state;
      const response = pick || currentVideoResponse;
      let params = new FormData();
      let localUri = pick ? response.uri : response.compressedVideo;
      if (localUri && !byVideo) {
        let filename = localUri.split("/").pop();
        params.append("myAnswerSheetFile", {
          uri: localUri,
          name: filename,
          type: "image/jpeg",
        });
      }
      this.setState({ imgUplaoding: true });
      let url = "";
      if (byVideo) {
        this.setState({ videoProcessing: true });
        url = baseURL + "uploadVideo/" + this.state.compCode;
        let filename = localUri.split("/").pop();
        params.append("videoFile", {
          uri: localUri,
          name: filename,
          type: "video/mp4",
        });

        params.append("keySno", keySno.toString());
        params.append("qno", QUESTION.qSno.toString());
        params.append("wheeboxID", wheeboxId);
      } else {
        url =
          baseURL +
          "uploadSubjectiveMultipartImage?compCode=" +
          this.state.compCode +
          "&uploadFor=SubjectiveImageUpload&testStartTime=" +
          testStartTime +
          "&keySno=" +
          keySno +
          "&wheeboxID=" +
          wheeboxId +
          "&testID=" +
          testNumber +
          "&questionSno=" +
          QUESTION.qSno +
          "&userAgent=%7B%22deviceDetailsJava%22%3A%22mobileApp%22%7D&uploadService=0&";
      }

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
          console.log("DATA ", data);
          let items = [...this.state.ALLQUESTIONS];
          let item = { ...items[this.state.selectedQuestion] };

          if (item.images == null) {
            let images = [];
            images.push(response.uri);
            let imagesBSNOs = [];
            imagesBSNOs.push(data.sno);

            item.images = images;
            item.imagesBSNOs = imagesBSNOs;
            item.byVideo = byVideo;
            item.BSNO = data.sno;
          } else {
            item.images = item.images.concat(response.uri);
            item.imagesBSNOs = item.imagesBSNOs.concat(data.sno);
          }

          items[this.state.selectedQuestion] = item;
          this.setState({ ALLQUESTIONS: items, imgUplaoding: false });
        })
        .catch((err) => {
          console.log("Error ", err?.response?.data);
          let items = [...this.state.ALLQUESTIONS];
          let item = { ...items[this.state.selectedQuestion] };
          if (item.images == null) {
            this.setState({ showImages: false });
          }
          selectValue("");
          if (err.toString() == "Error: Network Error") {
            this.setState({ networkError: true });
          } else {
            alert(err);
          }
        })
        .finally(() =>
          this.setState({ imgUplaoding: false, videoProcessing: false })
        );
    };
    const deleteVideo = async (QUESTION, index, imgIndex) => {
      Alert.alert("Warning!", "Do you really want to delete?", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            const wheeboxId = await AsyncStorage.getItem("WID");
            const newURLFORVIDEO =
              baseURL +
              "deleteuploadedfile/video/" +
              QUESTION.BSNO +
              "?key_sno=" +
              this.state.keySno +
              "&compcode=" +
              this.state.compCode +
              "&wheeboxID=" +
              wheeboxId +
              "&qno=" +
              QUESTION.qSno;

            const url =
              baseURL +
              "deleteuploadedfile/" +
              QUESTION.imagesBSNOs[imgIndex] +
              "?key_sno=" +
              this.state.keySno +
              "&compcode=" +
              this.state.compCode +
              "&testid=" +
              this.state.testId;

            axios({
              url: QUESTION.qflag == "17" ? newURLFORVIDEO : url,
              method: "POST",
              headers: {
                accessToken: accessToken,
              },
            })
              .then(async ({ data }) => {
                let items = [...this.state.ALLQUESTIONS];
                let item = { ...items[index] };
                if (QUESTION.qflag == "17") {
                  item.images = null;
                  item.byVideo = null;
                  item.BSNO = null;
                  item.answer = "";
                  items[index] = item;

                  this.setState({
                    ALLQUESTIONS: items,
                    imgUplaoding: false,
                    showImages: false,
                  });
                } else {
                  item.images.splice(imgIndex, 1);
                  item.imagesBSNOs.splice(imgIndex, 1);
                  if (item.images.length < 1) {
                    item.images = null;
                    item.byVideo = null;
                    item.BSNO = null;
                    item.answer = "";

                    this.setState({
                      showImages: false,
                    });
                  }
                  items[index] = item;

                  this.setState({
                    ALLQUESTIONS: items,
                  });
                }

                console.log("DONE ", data);
              })
              .catch((err) => {
                console.log("Error ", err);
              });
          },
        },
      ]);
    };

    return (
      <View style={styles.MainView}>
        <NetWorkError
          show={networkError}
          onClose={() => this.setState({ networkError: false })}
        />
        {!activeTimer && (
          <Warnings warningMessage={warningMessage} MClose={MClose} />
        )}
        <Modal animationType="fade" transparent={true} visible={showVideoModal}>
          <VideoPreview
            uri={currentVideoResponse.uri}
            closePreview={() => {
              selectImage("byVideo");
            }}
            uploadVideo={uploadMedia}
          />
        </Modal>
        {QUESTION != null ? (
          <>
            <View style={styles.headerWrap}>
              <FontAwesome
                name="list-ul"
                size={Theme.iconSize}
                onPress={() =>
                  this.props.navigation.navigate("QuestionRadio1", {
                    ALLQUESTIONS,
                    selectQuestion,
                    auto,
                    setAuto,
                    testNumber,
                    SECTIONNAMES,
                    selectSection,
                  })
                }
              />
              <View style={{ top: "2%" }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {new Date(this.state.timer * 1000)
                    .toISOString()
                    .substr(11, 8)
                    .split(":")
                    .map((t, i) => {
                      return (
                        <View
                          style={{
                            flexDirection: "row",
                          }}
                        >
                          <View>
                            <Text style={styles.timeParts}>{t}</Text>
                            {i == 0 ? (
                              <Text style={styles.timeDesc}>HH</Text>
                            ) : i == 1 ? (
                              <Text style={styles.timeDesc}>MM</Text>
                            ) : (
                              <Text style={styles.timeDesc}>SS</Text>
                            )}
                          </View>
                          {i != 2 && <Text style={styles.collons}>:</Text>}
                        </View>
                      );
                    })}
                </View>

                {/* <CountDown
                  size={12}
                  onChange={(timerSave) => {
                    this.setState({timerSave});
                  }}
                  until={time}
                  onFinish={() => submitTest('auto')}
                  digitStyle={{
                    backgroundColor: Theme.white,
                    borderWidth: 1,
                    borderColor: Theme.primary,
                  }}
                  running={activeTimer}
                  digitTxtStyle={{color: Theme.red}}
                  timeLabelStyle={{
                    color: Theme.primary,
                    fontWeight: Theme.bold,
                  }}
                  separatorStyle={{color: Theme.primary}}
                  timeToShow={['H', 'M', 'S']}
                  timeLabels={{h: 'HH', m: 'MM', s: 'SS'}}
                  showSeparator
                /> */}
              </View>
              <Card style={styles.circleCard}>
                {(proctoringOptions == "SVSSICSFT" ||
                  proctoringOptions == "SVSSICSFTSOD") && (
                  <RNCamera
                    ref={(ref) => {
                      this.camera = ref;
                    }}
                    style={styles.circleCard}
                    type={RNCamera.Constants.Type.front}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    playSoundOnCapture={false}
                    androidCameraPermissionOptions={{
                      title: "Permission to use camera",
                      message: "We need your permission to use your camera",
                      buttonPositive: "Ok",
                      buttonNegative: "Cancel",
                    }}
                    androidRecordAudioPermissionOptions={{
                      title: "Permission to use audio recording",
                      message: "We need your permission to use your audio",
                      buttonPositive: "Ok",
                      buttonNegative: "Cancel",
                    }}
                  />
                )}
              </Card>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ ...styles.srcWidthWrap, paddingBottom: 200 }}>
                <View>
                  <View style={styles.wrapQuestion}>
                    <View style={styles.mcqsFlagWrap}>
                      <Text style={styles.txtMCQ}>
                        {QUESTION.qflag == 1 && "MCQ"}{" "}
                        {QUESTION.qflag == 4 && "SUBJECTIVE"} Q
                        {this.state.selectedQuestion + 1} / Q
                        {ALLQUESTIONS.length}
                      </Text>
                      <Card style={styles.circleCard}>
                        <TouchableOpacity onPress={flagQuestion}>
                          <Fontisto
                            name="flag"
                            color={QUESTION.flagged ? Theme.red : Theme.primary}
                            size={22}
                          />
                        </TouchableOpacity>
                      </Card>
                    </View>

                    <HTML
                      source={{ html: QUESTION.qtext }}
                      {...htmlProps}
                      contentWidth={width}
                    />
                  </View>

                  {(imgUplaoding || videoProcessing) && (
                    <>
                      <ActivityIndicator
                        size="small"
                        color="#34D399"
                        style={{ margin: 10 }}
                      />
                      <Text style={styles.txtImgUpload}>
                        {videoProcessing
                          ? "Video Compressing & Uploading in Process"
                          : "Image Uploading in Process"}
                      </Text>
                    </>
                  )}
                  {QUESTION.qflag == 1 && (
                    <RadioButton.Group
                      onValueChange={(checked) => selectValue(checked)}
                      value={QUESTION.answer}
                    >
                      {QUESTION.op1 != "" && (
                        <View style={styles.txtAnswetList}>
                          <View style={styles.mcqsOptionView}>
                            <HTML
                              source={{ html: QUESTION.op1 }}
                              {...htmlProps}
                              contentWidth={width}
                            />
                          </View>
                          <View style={styles.wrapRadioIcon}>
                            <RadioButton value={QUESTION.op1} />
                          </View>
                        </View>
                      )}

                      {QUESTION.op2 != "" && (
                        <View style={styles.txtAnswetList}>
                          <View style={styles.mcqsOptionView}>
                            <HTML
                              source={{ html: QUESTION.op2 }}
                              {...htmlProps}
                              contentWidth={width}
                            />
                          </View>
                          <View style={styles.wrapRadioIcon}>
                            <RadioButton value={QUESTION.op2} />
                          </View>
                        </View>
                      )}

                      {QUESTION.op3 != "" && (
                        <View style={styles.txtAnswetList}>
                          <View style={styles.mcqsOptionView}>
                            <HTML
                              source={{ html: QUESTION.op3 }}
                              {...htmlProps}
                              contentWidth={width}
                            />
                          </View>
                          <View style={styles.wrapRadioIcon}>
                            <RadioButton value={QUESTION.op3} />
                          </View>
                        </View>
                      )}

                      {QUESTION.op4 != "" && (
                        <View style={styles.txtAnswetList}>
                          <View style={styles.mcqsOptionView}>
                            <HTML
                              source={{ html: QUESTION.op4 }}
                              {...htmlProps}
                              contentWidth={width}
                            />
                          </View>
                          <View style={styles.wrapRadioIcon}>
                            <RadioButton value={QUESTION.op4} />
                          </View>
                        </View>
                      )}

                      {QUESTION.op5 != "" && (
                        <View style={styles.txtAnswetList}>
                          <View style={styles.mcqsOptionView}>
                            <HTML
                              source={{ html: QUESTION.op5 }}
                              {...htmlProps}
                              contentWidth={width}
                            />
                          </View>
                          <View style={styles.wrapRadioIcon}>
                            <RadioButton value={QUESTION.op5} />
                          </View>
                        </View>
                      )}

                      {QUESTION.op6 != "" && (
                        <View style={styles.txtAnswetList}>
                          <View style={styles.mcqsOptionView}>
                            <HTML
                              source={{ html: QUESTION.op6 }}
                              {...htmlProps}
                              contentWidth={width}
                            />
                          </View>
                          <View style={styles.wrapRadioIcon}>
                            <RadioButton value={QUESTION.op6} />
                          </View>
                        </View>
                      )}
                      {QUESTION.op7 != "" && (
                        <View style={styles.txtAnswetList}>
                          <View style={styles.mcqsOptionView}>
                            {/* <Text style-={styles.txtAnswer}>
                              {QUESTION.op7}
                            </Text> */}
                            <HTML
                              source={{ html: QUESTION.op7 }}
                              {...htmlProps}
                              contentWidth={width}
                            />
                          </View>
                          <View style={styles.wrapRadioIcon}>
                            <RadioButton value={QUESTION.op7} />
                          </View>
                        </View>
                      )}
                    </RadioButton.Group>
                  )}
                  {QUESTION.qflag == 4 && (
                    <>
                      {(showInput || QUESTION.answer != "") &&
                      QUESTION.images == null ? (
                        QUESTION.answer != "SubjectiveAttempted" && (
                          <ScrollView>
                            <TextInput
                              value={QUESTION.answer}
                              onChangeText={changeSubjectiveValue}
                              style={styles.answerInput}
                              numberOfLines={15}
                              multiline={true}
                              placeholder="Enter your answer..."
                            />
                          </ScrollView>
                        )
                      ) : showImages || QUESTION.images != null ? (
                        <FlatList
                          numColumns={3}
                          data={QUESTION.images}
                          renderItem={({ item, index }) => {
                            return (
                              <View
                                style={{
                                  width: "31%",
                                  height: 170,
                                  marginHorizontal: "1.166%",
                                  marginBottom: 10,
                                }}
                              >
                                <Image
                                  style={styles.imgURL}
                                  source={{ uri: item }}
                                />
                                <TouchableOpacity
                                  style={{
                                    position: "absolute",
                                    alignSelf: "flex-end",
                                    top: 16,

                                    marginRight: 15,
                                    backgroundColor: "white",
                                    borderRadius: 100,
                                    width: 22,
                                    height: 22,
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                  onPress={() =>
                                    deleteVideo(
                                      QUESTION,
                                      this.state.selectedQuestion,
                                      index
                                    )
                                  }
                                >
                                  <Image
                                    source={require("../../../Assets/delete.jpeg")}
                                    style={{ width: 14, height: 14 }}
                                  />
                                </TouchableOpacity>
                              </View>
                            );
                          }}
                          keyExtractor={(item, index) => index.toString()}
                        />
                      ) : (
                        <>
                          <TouchableOpacity
                            onPress={() => {
                              this.setState({ showInput: true });
                            }}
                            style={{ alignItems: Theme.align }}
                          >
                            <SwipeButton
                              disabled={Platform.OS == "ios"}
                              swipeSuccessThreshold={
                                Platform.OS == "ios" ? 80 : 80
                              }
                              height={50}
                              width={"100%"}
                              title={
                                Platform.OS == "ios"
                                  ? "Press to answer by typing"
                                  : "Slide to answer by typing"
                              }
                              titleFontSize={Theme.smallTxt}
                              onSwipeSuccess={() => {
                                this.setState({ showInput: true });
                              }}
                              disabledRailBackgroundColor={Theme.lightGrey}
                              disabledThumbIconBackgroundColor={Theme.white}
                              disabledThumbIconBorderColor={Theme.white}
                              railFillBackgroundColor={Theme.lightGrey}
                              railFillBorderColor={Theme.white}
                              thumbIconBackgroundColor={Theme.white}
                              thumbIconBorderColor={Theme.white}
                              railBackgroundColor={Theme.lightGrey}
                              railBorderColor={Theme.white}
                              thumbIconImageSource={PenIcon}
                            />
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => {
                              selectImage();
                              selectValue("SubjectiveAttempted");
                            }}
                            style={{ alignItems: Theme.align }}
                          >
                            <SwipeButton
                              disabled={Platform.OS == "ios"}
                              swipeSuccessThreshold={
                                Platform.OS == "ios" ? 80 : 80
                              }
                              height={50}
                              width={"100%"}
                              title={
                                Platform.OS == "ios"
                                  ? "Press to upload answer using camera"
                                  : "Slide to upload answer using camera"
                              }
                              titleStyles={{ fontSize: 12 }}
                              titleFontSize={12}
                              onSwipeSuccess={() => {
                                selectImage();
                                selectValue("SubjectiveAttempted");
                              }}
                              disabledRailBackgroundColor={Theme.lightGrey}
                              disabledThumbIconBackgroundColor={Theme.white}
                              disabledThumbIconBorderColor={Theme.white}
                              railFillBackgroundColor={Theme.lightGrey}
                              railFillBorderColor={Theme.white}
                              thumbIconBackgroundColor={Theme.white}
                              thumbIconBorderColor={Theme.white}
                              railBackgroundColor={Theme.lightGrey}
                              railBorderColor={Theme.white}
                              thumbIconImageSource={cameraIcon}
                            />
                          </TouchableOpacity>
                        </>
                      )}
                    </>
                  )}
                  {QUESTION.qflag == 17 && (
                    <>
                      {(showInput || QUESTION.answer != "") &&
                      QUESTION.images == null ? (
                        QUESTION.answer != "SubjectiveAttempted" && (
                          <ScrollView>
                            <TextInput
                              value={QUESTION.answer}
                              onChangeText={changeSubjectiveValue}
                              style={styles.answerInput}
                              numberOfLines={15}
                              multiline={true}
                              placeholder="Enter your answer..."
                            />
                          </ScrollView>
                        )
                      ) : showImages || QUESTION.images != null ? (
                        <FlatList
                          numColumns={3}
                          data={QUESTION.images}
                          renderItem={({ item, index }) => {
                            return QUESTION.byVideo ? (
                              <View
                                style={{
                                  flex: 1,
                                  alignItems: "center",
                                  shadowColor: "#000",
                                  shadowOffset: {
                                    width: 0,
                                    height: 1,
                                  },
                                  shadowOpacity: 0.22,
                                  shadowRadius: 2.22,
                                  elevation: 3,
                                  borderRadius: 10,
                                  overflow: "hidden",
                                  marginTop: 10,
                                }}
                              >
                                <Video
                                  style={{
                                    width: Dimensions.get("screen").width - 50,
                                    height: Dimensions.get("screen").width - 50,
                                  }}
                                  source={{ uri: QUESTION.images[0] }}
                                  controls={true}
                                  resizeMode="cover"
                                />
                                <Card style={styles.circleCardDel}>
                                  <TouchableOpacity
                                    onPress={() =>
                                      deleteVideo(
                                        QUESTION,
                                        this.state.selectedQuestion,
                                        index
                                      )
                                    }
                                  >
                                    <Image
                                      source={require("../../../Assets/delete.jpeg")}
                                      style={{ width: 18, height: 18 }}
                                    />
                                  </TouchableOpacity>
                                </Card>
                              </View>
                            ) : (
                              <FlatList
                                numColumns={3}
                                data={QUESTION.images}
                                renderItem={({ item, index }) => {
                                  return (
                                    <View
                                      style={{
                                        width: "31%",
                                        height: 170,
                                        marginHorizontal: "1.166%",
                                      }}
                                    >
                                      <Image
                                        style={styles.imgURL}
                                        source={{ uri: item }}
                                      />
                                      <TouchableOpacity
                                        style={{
                                          position: "absolute",
                                          alignSelf: "flex-end",
                                          top: 16,
                                        }}
                                        onPress={() =>
                                          deleteVideo(
                                            QUESTION,
                                            this.state.selectedQuestion,
                                            index
                                          )
                                        }
                                      >
                                        <Image
                                          source={require("../../../Assets/delete.jpeg")}
                                          style={{ width: 18, height: 18 }}
                                        />
                                      </TouchableOpacity>
                                    </View>
                                  );
                                }}
                              />
                            );
                          }}
                          keyExtractor={(item, index) => index.toString()}
                        />
                      ) : (
                        <>
                          <TouchableOpacity
                            onPress={() => {
                              selectImage("byVideo");
                              selectValue("SubjectiveAttempted");
                            }}
                            style={{ alignItems: Theme.align }}
                          >
                            <SwipeButton
                              disabled={Platform.OS == "ios"}
                              swipeSuccessThreshold={
                                Platform.OS == "ios" ? 80 : 80
                              }
                              disabledRailBackgroundColor="white"
                              height={50}
                              width={"100%"}
                              title={
                                Platform.OS == "ios"
                                  ? "Press to answer through video"
                                  : "Slide or Press to answer through video"
                              }
                              titleFontSize={Theme.smallTxt}
                              onSwipeSuccess={() => {
                                selectImage("byVideo");
                                selectValue("SubjectiveAttempted");
                              }}
                              onSwipeStart={() => console.log("OOK")}
                              disabledRailBackgroundColor={Theme.lightGrey}
                              disabledThumbIconBackgroundColor={Theme.white}
                              disabledThumbIconBorderColor={Theme.white}
                              railFillBackgroundColor={Theme.lightGrey}
                              railFillBorderColor={Theme.white}
                              thumbIconBackgroundColor={Theme.white}
                              thumbIconBorderColor={Theme.white}
                              railBackgroundColor={Theme.lightGrey}
                              railBorderColor={Theme.white}
                              thumbIconImageSource={cameraIcon}
                            />
                          </TouchableOpacity>
                        </>
                      )}
                    </>
                  )}
                </View>

                {QUESTION.images != null && !QUESTION.byVideo && (
                  <FAB
                    style={styles.fab}
                    icon="camera-plus"
                    color="white"
                    onPress={selectImage}
                  />
                )}
              </View>
            </ScrollView>
            <View style={styles.absoluteViewWrap}>
              <View style={styles.GreenBtns}>
                {selectedQuestion > 0 ? (
                  <TouchableOpacity
                    // style={styles.circleWrap}
                    style={
                      this.state.imgUplaoding === false
                        ? styles.circleWrap
                        : { ...styles.circleWrap, backgroundColor: Theme.grey }
                    }
                    onPress={() => {
                      handleChangeQuestion("dec");
                    }}
                    disabled={this.state.imgUplaoding === false ? false : true}
                  >
                    <AntDesign
                      name="arrowleft"
                      size={Theme.iconSize}
                      color={Theme.white}
                    />
                  </TouchableOpacity>
                ) : (
                  <View />
                )}
                {selectedQuestion + 1 != ALLQUESTIONS.length && (
                  <TouchableOpacity
                    style={
                      this.state.imgUplaoding === false
                        ? styles.circleWrap
                        : { ...styles.circleWrap, backgroundColor: Theme.grey }
                    }
                    onPress={() => handleChangeQuestion("add")}
                    disabled={this.state.imgUplaoding === false ? false : true}
                  >
                    <AntDesign
                      name="arrowright"
                      size={Theme.iconSize}
                      color={Theme.white}
                    />
                  </TouchableOpacity>
                )}
              </View>
              <View style={styles.GreenBtns}>
                <TouchableOpacity
                  style={{ ...styles.EndTestWrap }}
                  onPress={this.submitTest}
                >
                  <Text style={styles.txtEndTest}>End Test</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <View style={styles.wrapIndicate}>
            <ActivityIndicator color={Theme.primary} size="large" />
            <Text>Loading questions...</Text>
          </View>
        )}
      </View>
    );
  }
}

export default QuestionRadio;
