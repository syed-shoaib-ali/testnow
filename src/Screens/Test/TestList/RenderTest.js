import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, Modal} from 'react-native';
import rightIcon from '../../../Assets/rightIcon.png';
import {Card} from 'react-native-shadow-cards';
import styles from './Styles';
import TestDetails from '../TestDetails/TestDetails';
import fileIcon from '../../../Assets/fileIcon.png';
import rotateIcon from '../../../Assets/rotateIcon.png';
import {accessToken} from '../../../apis/secure';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseURL} from '../../../apis/Apis';
import ActivityIndicator from '../../../Components/ActivityIndicator/ActivityIndicator';
export default function RenderTest({item, navigation}) {
  const [isloading, setIsloading] = useState(false);
  const [fliped, setFlipped] = useState(false);

  const startTest = async () => {
    setIsloading(true);
    if (item.testStatus != 'Continue') return;
    await AsyncStorage.setItem('testId', item.test_id.toString());
    await AsyncStorage.setItem('time', item.testTotalTime.toString());
    await AsyncStorage.setItem('proctoringOptions', item.proctoringOptions);
    await AsyncStorage.setItem('keySno', item.keySno.toString());
    await AsyncStorage.setItem('imagesCaptureTime', item.imagesCaptureTime);
    await AsyncStorage.setItem('proctoringWarning', item.proctoringWarning);
    let compCode = await AsyncStorage.getItem('comapnyCode');
    const approverScreen = item.approverScreen;
    if (approverScreen == 'auto' || approverScreen == 'on') {
      const wheeboxID = await AsyncStorage.getItem('WID');

      const url =
        baseURL +
        'approver/approvalStatus/' +
        compCode +
        `/?wheeboxID=${parseInt(wheeboxID)}&test_no=${item.test_id}&keySno=${
          item.keySno
        }`;

      axios({
        url,
        method: 'POST',
        headers: {
          accessToken: accessToken,
        },
      })
        .then(async ({data}) => {
          console.log('data::=>', data);
          if (data.message == 'proceedfurthure') {
            setIsloading(false);
            navigation.navigate('HardwareTestFailure', {
              testId: item.testId,
              testName: item.test_name,
            });
          } else {
            setIsloading(false);
            navigation.navigate('WaitingLounge', {
              testId: item.test_id,
              testName: item.test_name,
              start_time: item.start_time,
              approverScreen: item.approverScreen,
            });
          }
        })
        .catch((err) => {
          setIsloading(false);
          console.log('Error ', err);
          alert(err);
        });
    } else {
      setIsloading(false);
      navigation.navigate('WaitingLounge', {
        testId: item.test_id,
        testName: item.test_name,
        start_time: item.start_time,
        approverScreen: item.approverScreen,
      });
    }
  };

  return fliped ? (
    <TestDetails
      testId={item.test_id}
      flip={setFlipped}
      startTest={startTest}
    />
  ) : (
    <Card style={styles.srcWidthWrap}>
      <View style={styles.headerWrap}>
        <Image source={fileIcon} style={styles.fileIcon} />
        <Text style={styles.txtMcqs}>{item.test_name}</Text>
        <TouchableOpacity
          disabled={item.testStatus != 'Continue'}
          onPress={() => setFlipped(true)}>
          <Image source={rotateIcon} style={styles.rotateIcon} />
        </TouchableOpacity>
      </View>
      <>
        <View style={styles.subHeaderWrap}>
          <Text style={styles.txtTestAssign}>Test assigned</Text>
          <Text style={styles.txtTestAssign}>{item.allowFreq}</Text>
        </View>
        <View style={styles.bottomLine} />

        <View style={styles.subHeaderWrap}>
          <Text style={styles.txtTestAssign}>Test taken</Text>
          <Text style={styles.txtTestAssign}>{item.usedFreq}</Text>
        </View>
        <View style={styles.bottomLine} />

        <View style={styles.subHeaderWrap}>
          <Text style={styles.txtTestAssign}>Test duration</Text>
          <Text style={styles.txtTestAssign}>{item.testTotalTime} min</Text>
        </View>
        <View style={styles.bottomLine} />

        <View style={styles.subHeaderWrap}>
          <Text style={styles.txtTestAssign}>Test end date</Text>
          <Text style={styles.txtTestAssign}>{item.end_time}</Text>
        </View>
        <View style={styles.bottomLine} />
      </>
      <TouchableOpacity
        disabled={item.testStatus != 'Continue'}
        style={
          item.testStatus === 'Deactivated'
            ? [styles.startTestWrap, {backgroundColor: 'red', top: 0}]
            : item.testStatus === 'Continue'
            ? [styles.startTestWrap, {top: 0}]
            : item.testStatus === 'Expired'
            ? [styles.startTestWrap, {backgroundColor: '#FF8343', top: 0}]
            : item.testStatus === 'YettoStart'
            ? [styles.startTestWrap, {backgroundColor: '#FFAD45', top: 0}]
            : item.testStatus === 'Completed'
            ? [styles.startTestWrap, {backgroundColor: 'red', top: 0}]
            : null
        }
        onPress={startTest}>
        <Image source={rightIcon} style={styles.imageIcon} />
        <Text style={{color: '#ffffff', left: 10}}>
          {/* Start Test {item.testStatus} */}
          {item.testStatus === 'Expired' ? (
            <Text>Expired Test</Text>
          ) : item.testStatus === 'Continue' ? (
            <Text>Start Test</Text>
          ) : item.testStatus === 'Deactivated' ? (
            <Text>Test Inactive</Text>
          ) : item.testStatus === 'YettoStart' ? (
            <Text>Yet to Start</Text>
          ) : item.testStatus === 'Completed' ? (
            <Text>Completed</Text>
          ) : null}
        </Text>
      </TouchableOpacity>
      <>
        {isloading === true ? (
          <Modal animationType="fade" transparent={true}>
            <View style={styles.wrapIndicat}>
              <ActivityIndicator />
            </View>
          </Modal>
        ) : null}
      </>
    </Card>
  );
}
