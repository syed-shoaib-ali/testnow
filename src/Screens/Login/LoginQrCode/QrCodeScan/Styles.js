import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import Theme from '../../../../utils/Theme';
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  containerStyle: {backgroundColor: Theme.white},
  markerStyle: {
    borderColor: Theme.white,
    borderRadius: Theme.borderRadius,
    width: width - 150,
    height: width - 150,
  },
  txtPleaseScan: {
    position: 'absolute',
    bottom: 20,
    color: Theme.primary,
    fontSize: Theme.txtHeighest,
    fontWeight: '700',
    alignSelf: Theme.align,
    textAlign: Theme.align,
  },
  wrapIndic: {
    flex: 1,
    opacity: 0.5,
    backgroundColor: Theme.black,
    width: '100%',
    justifyContent: Theme.align,
  },
});

export default styles;
