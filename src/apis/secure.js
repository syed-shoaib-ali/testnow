import CryptoJS from 'crypto-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const encrypt = () => {
  var data = '1234567890-=!@#$%^&*()_+~?//\\//.,!!!';
  var key = CryptoJS.enc.Latin1.parse('8nLNssE3VEyW8nLN');
  var iv = CryptoJS.enc.Latin1.parse('o5RLmgmWtRrqzAkn');
  var encrypted = CryptoJS.AES.encrypt(data, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding,
  });
  console.log('encrypted: ' + encrypted);
  var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
    iv: iv,
    padding: CryptoJS.pad.ZeroPadding,
  });
  console.log('decrypted: ' + decrypted.toString(CryptoJS.enc.Utf8));
  return encrypted;
};

export const IV = CryptoJS.enc.Latin1.parse('o5RLmgmWtRrqzAkn');
export const KEY = CryptoJS.enc.Latin1.parse('8nLNssE3VEyW8nLN');
export const accessToken = '8nLNssE3VEyW';
export const companyCode = AsyncStorage.getItem('comapnyCode');

export const encryptData = (data) => {
  const enc = CryptoJS.AES.encrypt(data, KEY, {
    iv: IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding,
  });
  const ee = enc.toString();

  return ee.replace(/\//g, 'WbsLasH');
};
