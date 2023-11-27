import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Theme = {
  primary: "#34D399",
  lightGreen: "#059669",
  lightOrange: "#ffad45",
  btnRadius: 10,
  borderRadius: 20,
  txtWhite: "#ffffff",
  white: "white",
  black: "black",
  txtBlack: "#000000",
  iconGrey: "#BDBDBD",
  darkGrey: "#6B7280",
  grey: "grey",
  lightGrey: "#F2F2F2",
  iconSize: 24,
  bold: "bold",
  red: "red",
  fontFamilySemiBold: "Nunito-SemiBold",
  btn_Radius: 30,
  mainBtnSize: 16,
  smallTxt: 12,
  btnHeight: (height - 20) / 14,
  marginHor: 30,
  txtHeighest: 20,
  txtLength: 30,
  setWidth: width - 50,
  txtError: 10,
  left: 10,
  right: 10,
  padding: 20,
  errTxt: 10,
  placeHolCol: "#9CA3AF",
  align: "center",
  hp,
  wp,
};
export default Theme;
