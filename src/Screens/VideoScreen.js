import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Theme from "../utils/Theme";
import Images from "../Constant/Images";

const VideoScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.container} source={Images.backgroundUser}>
        <Image style={styles.user} source={Images.user} />
        <View style={styles.row}>
          <TouchableOpacity>
            <Image source={Images.camera} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Images.comment} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Images.microphone} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.txtWhite,
  },
  user: {
    marginHorizontal: "5%",
    marginTop: "10%",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  row: {
    position: "absolute",
    bottom: "10%",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-around",
    width: "65%",
  },
});
