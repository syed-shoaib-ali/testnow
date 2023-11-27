import { Platform, StyleSheet } from "react-native";

import Theme from "../../../utils/Theme";

const styles = StyleSheet.create({
  MainView: {
    backgroundColor: Theme.white,
    flex: 1,
  },
  wrapIndicate: {
    alignItems: Theme.align,
    justifyContent: Theme.align,
    flex: 1,
  },
  imgQ: {
    width: "31%",
    height: 170,
    marginHorizontal: "1.166%",
    marginTop: 15,
  },
  srcWidthWrap: {
    width: Theme.setWidth,
    alignSelf: Theme.align,
    paddingVertical: Theme.padding,
    flex: 1,
    // backgroundColor: 'yellow',
  },
  headerWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Theme.padding,
    paddingVertical: Theme.padding,
    alignItems: Theme.align,
    borderBottomWidth: 5,
    borderColor: Theme.white,
  },
  circleCard: {
    height: Theme.wp("11%"),
    width: Theme.wp("11%"),
    borderRadius: 50,
    elevation: 5,
    alignItems: Theme.align,
    justifyContent: Theme.align,
    overflow: "hidden",
    shadowColor: Theme.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  capsuleImg: {
    height: Theme.hp("4%"),
    width: Theme.wp("22%"),
    alignItems: Theme.align,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  time: {
    color: Theme.white,
    fontSize: Theme.smallTxt,
  },
  txtMCQ: {
    fontSize: Theme.smallTxt,
    color: Theme.lightGreen,
    fontWeight: Theme.bold,
  },
  txtmcqsQues: {
    fontSize: Theme.mainBtnSize,
    color: "#6C6C6C",
    paddingVertical: Theme.padding,
  },
  wrapQuestion: {
    borderBottomWidth: 0.3,
    color: Theme.darkGrey,
    width: "100%",
    alignSelf: Theme.align,
    paddingVertical: 5,
  },
  wrapRadioIcon: {
    borderWidth: Platform.OS === "ios" ? 1 : 0,
    borderRadius: 50,
    width: 34,
    height: 34,
    alignItems: Theme.align,
    justifyContent: Theme.align,
  },
  txtAnswetList: {
    color: Theme.darkGrey,
    fontSize: Theme.smallTxt,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  txtAnswer: {
    color: Theme.darkGrey,
    fontSize: Theme.smallTxt,
  },
  GreenBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  circleWrap: {
    backgroundColor: Theme.primary,
    height: 60,
    width: 60,
    borderRadius: 50,
    alignItems: Theme.align,
    justifyContent: Theme.align,
  },
  txtEndTest: {
    fontSize: Theme.smallTxt,
    color: Theme.txtWhite,
  },
  EndTestWrap: {
    backgroundColor: Theme.red,
    height: 50,
    width: "30%",
    borderRadius: 50,
    alignItems: Theme.align,
    justifyContent: Theme.align,
  },
  ChatWithProctor: {
    backgroundColor: Theme.primary,
    height: 50,
    width: "68%",
    borderRadius: 50,
    alignItems: Theme.align,
    justifyContent: Theme.align,
  },
  IconImgWrap: {
    backgroundColor: Theme.white,
    width: "100%",
    height: 60,
    borderRadius: Theme.btn_Radius,
    marginTop: 10,
    flexDirection: "row",
    paddingHorizontal: 30,
    alignItems: Theme.align,
  },
  imgBtn: {
    backgroundColor: Theme.white,
    borderRadius: 50,
    alignItems: Theme.align,
    justifyContent: Theme.align,
    height: 35,
    width: 35,
  },
  txtCaption: {
    color: Theme.darkGrey,
    fontSize: Theme.smallTxt,
    paddingHorizontal: "5%",
  },
  answerInput: {
    padding: 2,
    fontSize: 15,
    marginTop: 15,
    textAlignVertical: "top",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 140,
    backgroundColor: Theme.primary,
  },

  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: Theme.align,
  },
  capture: {
    flex: 0,
    backgroundColor: Theme.white,
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: Theme.padding,
    alignSelf: Theme.align,
    margin: 20,
  },
  absoluteViewWrap: {
    bottom: 0,
    position: "absolute",
    width: "90%",
    alignSelf: Theme.align,
  },
  mcqsOptionView: {
    width: "90%",
  },
  mcqsFlagWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgURL: {
    width: "100%",
    height: 170,
    marginHorizontal: "1.166%",
    marginTop: 15,
  },

  // TEMP

  centeredView: {
    flex: 1,
    justifyContent: Theme.align,
    alignItems: Theme.align,
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: Theme.align,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: Theme.align,
  },
  modalText: {
    marginBottom: 15,
    textAlign: Theme.align,
  },
  txtImgUpload: {
    textAlign: Theme.align,
    fontSize: 8,
    color: Theme.primary,
  },
  circleCardDel: {
    height: Theme.wp("11%"),
    width: Theme.wp("11%"),
    borderRadius: 50,
    elevation: 5,
    alignItems: Theme.align,
    justifyContent: Theme.align,
    overflow: "hidden",
    shadowColor: Theme.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    position: "absolute",
    alignSelf: "flex-end",
    right: 10,
    top: 10,
  },
  timeDesc: {
    color: Theme.primary,
    textAlign: "center",
    fontSize: 9,
    fontWeight: "bold",
  },
  collons: {
    color: Theme.primary,
    marginHorizontal: 2,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 7,
  },
  timeParts: {
    color: Theme.black,
    backgroundColor: Theme.white,
    borderWidth: 1,
    borderColor: Theme.primary,
    color: Theme.red,
    width: 28,
    height: 30,
    borderRadius: 5,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
});

export default styles;