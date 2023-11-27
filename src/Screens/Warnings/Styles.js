import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
import Theme from '../../utils/Theme';

const styles = StyleSheet.create({
  MainView: {
    backgroundColor: Theme.white,
  },
  viewWrap: {
    flex: 1,
    justifyContent: Theme.align,
  },
  srcWidthWrap: {
    width: Theme.setWidth,
    alignSelf: Theme.align,
  },

  headerWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: Theme.padding,
    alignItems: Theme.align,
  },
  questionTitle: {
    color: Theme.darkGrey,
    fontSize: Theme.mainBtnSize,
    left: 10,
  },

  modalWrap: {
    borderRadius: Theme.btn_Radius,
    borderColor: Theme.red,
    borderWidth: 10,
    width: width - 100,
    alignSelf: Theme.align,
    height: height / 2 - 120,
    backgroundColor: Theme.white,
    alignItems: Theme.align,
  },
  imgSetting: {
    height: 60,
    width: 60,
  },
  txtWarning: {
    color: '#DC2626',
    fontSize: Theme.txtHeighest,
    fontWeight: Theme.bold,
    paddingVertical: 5,
  },
  txtMultiple: {
    color: '#DC2626',
    fontSize: 15,
    fontWeight: 'normal',
    paddingVertical: 5,
  },
  closeBtn: {
    alignSelf: 'flex-end',
    margin: 12,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: '20%',
  },
  iconClose: {
    margin: 10,
  },
});

export default styles;
