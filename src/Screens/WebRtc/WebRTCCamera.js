import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from "react-native-modal";

import {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  MediaStream,
  MediaStreamTrack,
  mediaDevices,
  registerGlobals,
} from "react-native";
import Theme from "../../utils/Theme";
// import {acc} from 'react-native-reanimated';

const STUN_SERVER = "stun:stun.l.google.com:19302";
// const SOCKET_URL = 'wss://webcall.wheebox.com:8886';
const SOCKET_URL = "wss://webrtc.wheebox.com:443";
// const SOCKET_URL = 'wss://stream.wheebox.com/socket.io';
// const SOCKET_URL = 'ws://ec2-54-172-251-18.compute-1.amazonaws.com:8887';

export default function WebRTCCamera({
  navigation,
  cameraStyle,
  userId,
  setLiveFeed,
  liveFeed,
  activeSocket,
  conn,
  callOffer,
  callName,
  candidate,
  leave,
}) {
  const [socketActive, setSocketActive] = useState(false);
  const [calling, setCalling] = useState(false);
  const [localStream, setLocalStream] = useState({ toURL: () => null });
  const [remoteStream, setRemoteStream] = useState({ toURL: () => null });

  useEffect(() => {
    if (candidate) {
      handleCandidate(candidate);
    }
  }, [candidate]);

  useEffect(() => {
    if (leave) {
      handleLeave();
    }
  }, [leave]);

  const yourConn = useRef(
    new RTCPeerConnection({
      iceServers: [
        {
          urls: STUN_SERVER,
        },
      ],
    })
  );

  const [callActive, setCallActive] = useState(false);
  const [incomingCall, setIncomingCall] = useState(false);
  const [otherId, setOtherId] = useState("");
  const [callToUsername, setCallToUsername] = useState("");
  const connectedUser = useRef(null);
  const offerRef = useRef(null);

  /**
   * Calling Stuff
   */

  useEffect(() => {
    initLocalVideo();
    registerPeerEvents();
  }, []);

  useEffect(() => {
    setSocketActive(true);

    setTimeout(() => {
      handleOffer(callOffer, callName);
    }, 1000);
  }, []);

  const registerPeerEvents = () => {
    yourConn.current.onaddstream = (event) => {
      console.log("On Add Remote Stream");
      setRemoteStream(event.stream);
    };

    // Setup ice handling
    yourConn.current.onicecandidate = (event) => {
      if (event.candidate) {
        send({
          type: "candidate",
          candidate: event.candidate,
        });
      }
    };
  };
  const handleCandidate = (candidate) => {
    alert("CANDIDATE");
    setTimeout(async function () {
      yourConn.current.addIceCandidate(new RTCIceCandidate(candidate));
    }, 1000);
  };
  const initLocalVideo = () => {
    mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          mandatory: {
            minWidth: Theme.wp("11%"), // Provide your own width, height and frame rate here
            minHeight: Theme.wp("11%"),
            minFrameRate: 30,
          },
          // facingMode: "user",
          // optional: videoSourceId ? [{sourceId: videoSourceId}] : [],
        },
      })
      .then((stream) => {
        // Got stream!
        setLocalStream(stream);

        // setup stream listening
        yourConn.current.addStream(stream);
      })
      .catch((error) => {
        // Log error
      });
    // });
  };

  const send = (message) => {
    //attach the other peer username to our messages
    if (connectedUser.current) {
      message.name = connectedUser.current;
      // console.log('Connected iser in end----------', message);
    }
    console.log("Message", message);
    conn.send(JSON.stringify(message));
  };

  //when somebody sends us an offer
  const handleOffer = async (offer, name) => {
    console.log(name + " is calling you.");
    connectedUser.current = name;
    offerRef.current = { name, offer };
    setOtherId(name);
    acceptCall();
    setLiveFeed(true);

    // setIncomingCall(true);

    // acceptCall()
    if (callActive) acceptCall();
  };

  const acceptCall = async () => {
    const name = offerRef.current.name;
    const offer = offerRef.current.offer;
    setIncomingCall(false);
    setCallActive(true);
    console.log("Accepting CALL", name, offer);
    yourConn.current
      .setRemoteDescription(offer)
      .then(function () {
        connectedUser.current = name;
        return yourConn.current.createAnswer();
      })
      .then(function (answer) {
        yourConn.current.setLocalDescription(answer);
        send({
          type: "answer",
          answer: answer,
        });
      })
      .then(function () {
        // Send the answer to the remote peer using the signaling server
      })
      .catch((err) => {
        console.log("Error acessing camera", err);
      });
  };

  const handleLeave = () => {
    setLiveFeed(false);
    send({
      name: userId,
      otherName: otherId,
      type: "leave",
    });

    setCalling(false);
    setIncomingCall(false);
    setCallActive(false);
    offerRef.current = null;
    connectedUser.current = null;
    setRemoteStream(null);
    setLocalStream(null);
    yourConn.current.onicecandidate = null;
    yourConn.current.ontrack = null;

    resetPeer();
    initLocalVideo();
    // console.log("Onleave");
  };

  const resetPeer = () => {
    yourConn.current = new RTCPeerConnection({
      iceServers: [
        {
          urls: STUN_SERVER,
        },
      ],
    });

    registerPeerEvents();
  };

  return (
    <View style={styles.root}>
      <RTCView
        streamURL={localStream ? localStream.toURL() : ""}
        style={{ ...cameraStyle, borderRadius: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#fff",
  },
  inputField: {
    marginBottom: 10,
    flexDirection: "column",
  },
  videoContainer: {
    flex: 1,
    minHeight: 450,
  },
  videos: {
    height: Theme.wp("11%"),
    width: Theme.wp("11%"),
    borderRadius: 50,
    elevation: 5,
    alignItems: Theme.align,
    justifyContent: Theme.align,
    overflow: "hidden",
    shadowColor: Theme.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    overflow: "hidden",
    borderRadius: 200,
  },
  localVideos: {
    height: 100,
    marginBottom: 10,
  },
  remoteVideos: {
    height: 400,
  },
  localVideo: {
    backgroundColor: "#f2f2f2",
    height: "100%",
    width: "100%",
  },
  remoteVideo: {
    backgroundColor: "#f2f2f2",
    height: "100%",
    width: "100%",
  },
});
