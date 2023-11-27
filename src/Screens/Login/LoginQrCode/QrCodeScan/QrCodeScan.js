import React, {Component} from 'react';
import {View, Text, Modal} from 'react-native';
import ActivityIndicator from '../../../../Components/ActivityIndicator/ActivityIndicator';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './Styles';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
class QrCodeScan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: false,
    };
  }
  ifScaned = (e) => {
    (e) => console.log('QR code scanned!', e);
    console.log('check', e);
    console.log('rawData', e.rawData);
    console.log('Data', e.data);
    this.signInAuthentication(e.data);
  };

  signInAuthentication = async (url) => {
    this.setState({isloading: true});
    await axios
      .get(url)
      .then(async ({data}) => {
        console.log('Qr Code Scan data', data);
        if (data.status === 'success') {
          await AsyncStorage.setItem('encEmail', data.login_id);
          await AsyncStorage.setItem('WID', data.wheeboxID);
          await AsyncStorage.setItem('comapnyCode', data.compCode);
          await AsyncStorage.setItem('candidateName', data.name);
          console.log('Company Code in Qr=>', data.compCode);
          this.props.navigation.navigate('TestList');
        } else {
          alert(data.message);
        }
        this.setState({isloading: false});
      })
      .catch((error) => {
        this.setState({isloading: false});
        console.log(error);
        alert(error);
      });
  };
  render() {
    return (
      <View style={styles.MainView}>
        <View>
          <QRCodeScanner
            containerStyle={styles.containerStyle}
            onRead={this.ifScaned}
            reactivate={true} //When set to false, when a QR code is scanned, the QRCodeScanner will not scan another code until it is re-rendered.
            permissionDialogMessage="Need Permission to Access Camera"
            reactivateTimeout={10}
            showMarker={true}
            markerStyle={styles.markerStyle}
            vibrate={false}
          />
          {this.state.isloading === true && (
            <Modal animationType="fade" transparent={true}>
              <View style={styles.wrapIndic}>
                <ActivityIndicator />
              </View>
            </Modal>
          )}
        </View>
        <Text style={styles.txtPleaseScan}>Please Scan Your Qr Code!</Text>
      </View>
    );
  }
}

export default QrCodeScan;
