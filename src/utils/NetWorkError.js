import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

export default function NetWorkError({show, onClose}) {
  return (
    <Modal
      visible={show}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            source={require('../Assets/noInternet.png')}
            style={{width: 70, height: 70, marginBottom: 10}}
          />
          <Text style={{fontSize: 15, fontWeight: '800', color: 'black'}}>
            You are Offline
          </Text>
          <Text style={{color: 'grey'}}>Please connect to the internet</Text>
          <TouchableOpacity
            onPress={onClose}
            style={{
              backgroundColor: 'red',
              width: '75%',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 10,
              borderRadius: 4,
              marginTop: 25,
            }}>
            <Text style={{color: 'white'}}> Try Again</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
});
