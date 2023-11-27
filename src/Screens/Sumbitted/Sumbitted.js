import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import styles from './Styles';

class Submmitted extends Component {
  async componentDidMount() {
    setTimeout(async () => {
      this.props.navigation.replace('Rating', {
        testNumber: this.props.route.params.testNumber,
        keySno: this.props.route.params.keySno,
      });
    }, 3000);
    return;
  }

  render() {
    return (
      <View style={styles.MainView}>
        <Image
          source={require('../../Assets/gif/tickGif.gif')}
          style={styles.tickGif}
        />
        <View style={styles.txtSubmitedWrap}>
          <Text style={styles.txtSubmited}>Test Submitted Successfully</Text>
        </View>
      </View>
    );
  }
}

export default Submmitted;
