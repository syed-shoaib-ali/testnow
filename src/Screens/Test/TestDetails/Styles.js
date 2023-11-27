import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import Theme from '../../../utils/Theme';

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    marginBottom: 10,
  },
  setWidthWrap: {
    width: '90%',
    alignSelf: Theme.align,
  },
  srcWidthWrap: {
    width: Theme.setWidth,
    alignSelf: Theme.align,
    marginTop: 20,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  topWrap: {
    backgroundColor: Theme.white,
    paddingVertical: Theme.padding,
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    width: Theme.setWidth,
    alignSelf: Theme.align,
    height: 50,
    alignItems: Theme.align,
    paddingHorizontal: Theme.padding,
    borderRadius: 10,
  },
  headerWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    alignItems: Theme.align,
    paddingHorizontal: 10,
  },
  txtMcqs: {
    color: '#111827',
    fontSize: Theme.mainBtnSize,
    fontWeight: '600',
  },
  txtTestDetail: {
    color: Theme.darkGrey,
    fontSize: 14,
  },
  txtLoremIpsum: {
    color: Theme.txtBlack,
    alignSelf: Theme.align,
    fontSize: Theme.mainBtnSize,
  },
  txtTestName: {
    color: Theme.lightGreen,
    fontSize: 14,
  },
  rotateIcon: {
    width: 24,
    height: 24,
  },
  fileIcon: {
    width: 34,
    height: 34,
  },
});

export default styles;
