// Default Imports
import React, {Component} from 'react';
import {Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Import From Another Screens
import styles from './Styles';

//Start Code
class SplashScreen extends Component {
  async componentDidMount() {
    setTimeout(async () => {
      this.props.navigation.replace('LoginScreen');
    }, 4500);
    return;
  }

  render() {
    return (
      <SafeAreaView style={styles.MainView}>
        <Image
          source={require('../../Assets/gif/startingGif.gif')}
          style={styles.logoSize}
        />
        {/* <Image
          source={require('../../Assets/gif/tickGif.gif')}
          style={styles.logoSize}
        /> */}
      </SafeAreaView>
    );
  }
}

export default SplashScreen;
