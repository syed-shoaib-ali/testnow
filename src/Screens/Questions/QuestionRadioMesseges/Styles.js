import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

import Theme from "../../../utils/Theme";

const styles = StyleSheet.create({
  MainView: {
    backgroundColor: Theme.white,
    flex: 1,
    // justifyContent: "space-between",
  },
  messageItemSty: {
    padding: 10,
    backgroundColor: "blue",
    margin: 10,
    borderRadius: 10,
  },
  srcWidthWrap: {
    // width: width - 50,
    // alignSelf: Theme.align,
    // backgroundColor: "red",
    // position: "absolute",
    // bottom: 30,
  },
  headerWrap: {
    paddingHorizontal: Theme.padding,
    paddingVertical: Theme.padding,
    flexDirection: "row",
    alignItems: Theme.align,
    justifyContent: "space-between",
    width: "70%",
  },
  txtBack: {
    fontSize: Theme.mainBtnSize,
    color: "#5DB075",
  },
  txtMsg: {
    color: Theme.txtBlack,
    fontSize: 30,
    fontWeight: "600",
  },
  msgWriteWrap: {
    // position: "absolute",
    // bottom: 10,
    // width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "10%",
    // alignItems: Theme.align,
  },
  btnCircle: {
    alignItems: Theme.align,
    justifyContent: Theme.align,
    borderRadius: 50,
    backgroundColor: "#059669",
    height: 50,
    width: 50,
  },
  inputViewWrap: {
    borderColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: Theme.btn_Radius,
    width: "82%",
    height: 50,
    backgroundColor: "#E8E8E8",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: Theme.align,
    paddingHorizontal: 10,
  },
});

export default styles;
