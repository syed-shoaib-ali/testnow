import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  StyleSheet,
} from "react-native";
import styles from "./Styles";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Theme from "../../../utils/Theme";
import { useNavigation } from "@react-navigation/native";

export default function QuestionRadioMesseges({ route }) {
  const { email, keySno, wheeboxId } = route?.params || {};
  var chatFirstURL = "/uatinstance" + keySno + "ws1/";
  var chatSecountURL = "/uatinstance" + keySno + "ws2/";
  var SOCKET_URL = "wss://chatuat.wheebox.com" + chatFirstURL;
  const [chatMessage, setMessage] = useState("");
  const navigation = useNavigation();

  let senderSocket = useRef(new WebSocket(SOCKET_URL));
  let receiverSocket = useRef(new WebSocket(SOCKET_URL));
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    receiverSocket.current.onopen = () => {
      console.log("Connected 3 to the chat server receiver");
    };
    receiverSocket.current.onmessage = (msg) => {
      responseOfChat(msg);
    };
    receiverSocket.current.onerror = function (err) {
      console.log("Got error3", err);
    };
  }, []);

  useEffect(() => {
    senderSocket.current.onopen = () => {
      console.log("Connected to the chat server receiver");
    };
    senderSocket.current.onerror = function (err) {
      console.log("Got error", err);
    };
  }, []);

  const sendMessage = () => {
    const message = {
      uName: wheeboxId,
      msg: chatMessage,
      colorCode: "red",
      type: "chat",
      url: "" + chatFirstURL,
      random: Math.random(),
      id: email,
      key_sno: keySno,
      fname: "Deepak Kumar",
      sendto: wheeboxId,
      proctorID: "",
      subtype: "user",
      secoundUrl: chatSecountURL,
      action: "insert",
      appURL: "https://uat.wheebox.com/",
      chaturl: "wss://akschat.wheebox.com/",
      streamurl: "https://wstream1.wheebox.com:443/",
    };

    console.log("MESSAGE ", message);

    senderSocket.current.send(JSON.stringify(message));
    let concatMsg = {
      chatDateTime: "2022-08-16 15:12:52",
      chatTime: "15:12:52",
      color: "",
      message: chatMessage,
      name: "Deepak Kumar",
      sentTo: wheeboxId,
      type: "user",
    };
    let cloneArray = messages;
    cloneArray.push(concatMsg);
    setMessages(cloneArray);

    // setMessages([...messages, concatMsg]);
    // messages.push(concatMsg);
  };

  useEffect(() => {
    var myInterval = setInterval(() => {
      if (receiverSocket?.current?.readyState === 1) {
        const message = {
          uName: wheeboxId,
          msg: "",
          colorCode: "red",
          type: "chat",
          url: chatFirstURL,
          random: Math.random(),
          id: email,
          key_sno: keySno.toString(),
          fname: "Deepak Kumar",
          sendto: wheeboxId,
          proctorID: "",
          subtype: "user",
          secoundUrl: chatSecountURL,
          action: "select",
          appURL: "https://uat.wheebox.com/",
          chaturl: "wss://akschat.wheebox.com/",
          streamurl: "https://wstream1.wheebox.com:443/",
        };

        receiverSocket.current.send(JSON.stringify(message));
        clearInterval(myInterval);
      } else {
        console.log("WAITING FOR CONNECT");
      }
    }, 2000);
  }, []);

  async function responseOfChat(response) {
    let newresponse = await decodeURIComponent(response.data);
    newresponse = await newresponse
      .replace(/&#32;/g, " ")
      .replace(/&quote;/g, '"');
    let finalResponse = JSON.parse(newresponse);
    let messages = [];

    try {
      Object.keys(finalResponse).forEach(function (key, index) {
        try {
          messages.push(JSON.parse(finalResponse[key]));
        } catch (error) {
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }

    setMessages(messages);
    console.log("response: " + messages.length);
  }
  const renderMessages = ({ item, index }) => {
    return (
      <View
        style={[
          styles.messageItemSty,
          {
            backgroundColor:
              item?.type !== "proctor" ? Theme.lightGreen : Theme.grey,
            alignSelf: item?.type !== "proctor" ? "flex-end" : "flex-start",
          },
        ]}
      >
        <Text style={{ color: Theme.white }}>
          {item?.message || "No Message"}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.MainView}>
      <View style={styles.headerWrap}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Text style={styles.txtBack}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.txtMsg}>Messege</Text>
      </View>

      <View style={{ flex: 1 }}>
        <ScrollView style={{}}>
          <FlatList style={{}} data={messages} renderItem={renderMessages} />
        </ScrollView>
      </View>
      <View style={styles.srcWidthWrap}>
        <View style={styles.msgWriteWrap}>
          <View style={styles.inputViewWrap}>
            <TextInput
              placeholder="Message here..."
              style={Theme.padding}
              maxLength={Theme.txtLength}
              value={chatMessage}
              onChangeText={setMessage}
            />
            <Entypo name="attachment" size={Theme.iconSize} color="#818181" />
          </View>
          <View>
            <TouchableOpacity style={styles.btnCircle} onPress={sendMessage}>
              <AntDesign
                name="arrowright"
                size={Theme.iconSize}
                color={Theme.white}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
