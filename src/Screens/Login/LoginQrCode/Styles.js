import {StyleSheet, Dimensions} from 'react-native';
import Theme from '../../../utils/Theme';

const styles = StyleSheet.create({
  MainView: {
    backgroundColor: Theme.white,
    flex: 1,
  },
  btnImgWrap: {
    justifyContent: Theme.align,
    alignItems: Theme.align,
    padding: 70,
  },
  ImgQrCode: {
    height: 200,
    width: 200,
  },
  wrapBtnImg: {
    alignItems: Theme.align,
    justifyContent: Theme.align,
  },
  srcWidthWrap: {
    width: Theme.setWidth,
    alignSelf: Theme.align,
    paddingVertical: 50,
  },
});

export default styles;
