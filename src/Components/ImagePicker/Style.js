import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
import Theme from '../../utils/Theme';
export default StyleSheet.create({
  MainView: {
    flex: 1,
    alignItems: Theme.align,
    justifyContent: Theme.align,
  },
  txtClickIcon: {
    fontSize: Theme.mainBtnSize,
    // fontWeight: Theme.bold,
    marginTop: 10,
  },
  imagePickerIcon: {
    height: width - 180,
    width: width - 180,
    resizeMode: 'cover',
    borderRadius: Theme.borderRadius,
  },
  modalMainView: {
    backgroundColor: Theme.white,
    height: height - 200,
    borderRadius: 10,
    width: width - 60,
    alignSelf: Theme.align,
  },
  txtImageGuid: {
    color: Theme.txtBlack,
    fontSize: Theme.mainBtnSize,
    alignSelf: Theme.align,
    fontWeight: Theme.bold,
    padding: Theme.padding,
  },
  imgSize: {
    height: 100,
    width: 100,
  },
  txtdo: {
    fontSize: Theme.mainBtnSize,
    color: Theme.txtBlack,
    fontWeight: Theme.bold,
    left: Theme.left,
  },
  txtCap: {
    fontSize: Theme.smallTxt,
    color: Theme.darkGrey,
    paddingLeft: 30,
  },
  rowEvenly: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  setAlign: {
    width: '90%',
  },
  btnDone: {
    alignItems: Theme.align,
    justifyContent: Theme.align,
    backgroundColor: Theme.primary,
    height: (height - 20) / 14,
    width: '80%',
    alignSelf: Theme.align,
    borderRadius: Theme.btn_Radius,
    marginTop: '10%',
  },
  txtDone: {
    color: Theme.txtWhite,
    fontWeight: Theme.bold,
    fontSize: Theme.smallTxt,
  },
  imgVerify: {
    height: 25,
    width: 25,
  },
  flexAlign: {
    flexDirection: 'row',
    padding: Theme.padding,
    alignItems: Theme.align,
  },
});
