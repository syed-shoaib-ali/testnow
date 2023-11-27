import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Video from 'react-native-video';

const VideoPreview = ({uri, closePreview, uploadVideo}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgBack}
        // source={require('../../../Assets/videopreviewbBg.jpg')}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.heading}>Preview Video</Text>
          <View style={styles.centerView}>
            <Text style={styles.preview}>Preview</Text>
            <Video
              style={styles.videoStyle}
              source={{uri: uri}}
              controls={true}
              resizeMode="stretch"
            />
          </View>

          <View style={styles.centerView}>
            <Text style={styles.description} numberOfLines={2}>
              Do you want to upload this video or try again?{' '}
            </Text>
            <View style={styles.rowView}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => uploadVideo(true)}>
                <Text style={styles.btnText}>Upload Video</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={closePreview}>
                <Text style={styles.btnText}>Try again</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#34D399',
          padding: 10,
        }}>
        <Image
          source={require('../../../Assets/internet2.png')}
          style={{width: 20, height: 20, tintColor: 'white'}}
        />
        <Text
          style={{
            ...styles.description,
            flex: 1,
            fontSize: 13,
            textAlign: 'center',
            color: 'white',
          }}
          numberOfLines={2}>
          Ensure you are connected to stable internet.
        </Text>
      </View>
    </View>
  );
};

export default VideoPreview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: 'white',
  },
  imgBack: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  innerContainer: {
    padding: 20,
  },
  heading: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  centerView: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginTop: '5%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,
  },
  preview: {
    fontWeight: 'bold',
    color: 'grey',
  },
  videoStyle: {
    marginVertical: '3%',
    width: '100%',
    height: 250,
  },
  description: {
    textAlign: 'center',
    paddingHorizontal: 8,
    color: 'grey',
    fontWeight: '700',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#34D399',
    paddingVertical: 6,
    paddingHorizontal: 20,
    marginHorizontal: '3%',
    borderRadius: 30,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
});
