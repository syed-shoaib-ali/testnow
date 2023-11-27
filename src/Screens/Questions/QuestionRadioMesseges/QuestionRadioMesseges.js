import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import styles from "./Styles";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Theme from "../../../utils/Theme";
import { useNavigation } from "@react-navigation/native";

export default function QuestionRadioMesseges({ route }) {
  const { email, keySno, wheeboxId } = route?.params || {};
  const [chatMessage, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();

  const [text, onChangeText] = useState("message for web");
  const [text2, setText] = useState("");
  const textref = useRef(text);

  const [senderWS, setSenderWS] = useState(null);
  useEffect(() => {
    textref.current = text;
    return () => {};
  }, [text]);

  var chatFirstURL = "/uatinstance" + keySno.toString() + "ws1/";
  var chatSecountURL = "/uatinstance" + keySno.toString() + "ws2/";
  var wssURL = "wss://chatuat.wheebox.com" + chatFirstURL;

  var senderThreadName;

  function senderThread(time) {
    clearTimeout(senderThreadName);
    senderThreadName = setTimeout(function () {
      senderValidate();
    }, time);
  }

  function senderValidate() {
    if ("WebSocket" in window) {
      senderConnectWebSocket(wssURL);
    } else {
      console.log("web sockets not suported");
    }
  }

  useEffect(() => {
    if (chatMessage === "Chat Start") {
      sendMessage();
    }
  }, [chatMessage]);

  function senderConnectWebSocket(host) {
    var senderWS_ = new WebSocket(host);
    setSenderWS(senderWS_);
    senderWS_.onopen = function () {
      console.log("Connected: Sender");
      setMessage("Chat Start");
    };

    senderWS_.onclose = function () {
      senderThread(2000);
      console.log("closed");
    };

    senderWS_.onerror = function (evt) {
      console.log('<span style="color: red;">ERROR:</span> ' + evt.data);
    };
    senderWS_.onmessage = function (evt) {
      try {
        if (evt.data != null) {
          try {
            if (evt.data != "") {
              responseOfChat(evt);
            }
          } catch (e) {
            alert(e);
          }
        }
      } catch (e) {
        alert(e);
      }
    };
  }

  useEffect(() => {
    try {
      senderThread(1000);
    } catch (e) {
      alert(e);
    }
    return () => {};
  }, []);

  async function responseOfChat(response) {
    let newresponse = await decodeURIComponent(response.data);
    newresponse = await newresponse
      .replace(/&#32;/g, " ")
      .replace(/&quote;/g, '"');
    let finalResponse = JSON.parse(newresponse);
    let messages = [];
    console.log(Object.keys(finalResponse).length);
    for (let index = 0; index < Object.keys(finalResponse).length; index++) {
      try {
        messages.push(JSON.parse(finalResponse["data" + index]));
      } catch (error) {
        // console.log(error);
      }
    }
    setMessages(messages);
  }

  const sendMessage = () => {
    const message = {
      uName: wheeboxId,
      msg: chatMessage,
      colorCode: "red",
      type: "chat",
      url: "" + chatFirstURL,
      random: Math.random(),
      id: email,
      key_sno: keySno.toString(),
      fname: "Deepak Kumar",
      sendto: wheeboxId,
      proctorID: "proctor@sales.com",
      subtype: "user",
      secoundUrl: chatSecountURL,
      action: "insert",
      appURL: "https://uat.wheebox.com/",
    };

    senderWS.send(JSON.stringify(message));
    setMessage("");
  };

  const renderMessages = useCallback(({ item, index }) => {
    return (
      <View
        key={index.toString()}
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
  }, []);

  return (
    <View style={styles.MainView}>
      <View style={styles.headerWrap}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Text style={styles.txtBack}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.txtMsg}>Messege</Text>
      </View>
      {messages.length == 0 ? (
        <View
          style={{
            alignItems: Theme.align,
            justifyContent: Theme.align,
            flex: 1,
          }}
        >
          <ActivityIndicator color={Theme.primary} size="large" />
          <Text style={{ fontSize: 14 }}>Loading messages...</Text>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <ScrollView style={{}}>
            <FlatList style={{}} data={messages} renderItem={renderMessages} />
          </ScrollView>
        </View>
      )}

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
