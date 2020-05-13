/* eslint-disable */
import CryptoJS from 'crypto-js';
const key = 'A1HS8CUR1TY@9812'; // temp for testing set secret key here. Store this somewhere else.
const initVector = 'A1HS8CUR1TY@9812'; // temp for testing set secret key here. Store this somewhere else.
// const encryptionKey = CryptoJS.enc.Utf8.parse(key);
const aih = {
  Enc: {},
  ENK: key,
  ENI: initVector,
};
aih.Enc.Key = CryptoJS.enc.Utf8.parse(aih.ENK);

export function encrypt(val, randomNum) {
  let result = '';
  if (randomNum !== undefined && randomNum !== '') {
    aih.Enc.IV = CryptoJS.enc.Utf8.parse((aih.ENI).substring(0, (aih.ENI).length - 2) + randomNum);
    const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(val), aih.Enc.Key, {
      keySize: 256 / 8,
      iv: aih.Enc.IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    result = encrypted.toString();
  } else {
    aih.Enc.IV = CryptoJS.enc.Utf8.parse(aih.ENI);
    const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(val), aih.Enc.Key, {
      keySize: 256 / 8,
      iv: aih.Enc.IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    result = encrypted.toString();
  }
  return result;
}

export function decrypt(val) {
  let result = '';
  let decrypted = '';
  if (val.indexOf('###') > 0) {
    const partnerKey = val.substring(0, val.indexOf('###'));
    const iv = (aih.ENI).substring(0, (aih.ENI).length - 2) + partnerKey.substring(0, 2);
    aih.Enc.IV = CryptoJS.enc.Utf8.parse(iv);
    const content = val.substring(val.indexOf('###') + 3);
    decrypted = CryptoJS.AES.decrypt(content, aih.Enc.Key, {
      keySize: 256 / 8,
      iv: aih.Enc.IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
  } else {
    aih.Enc.IV = CryptoJS.enc.Utf8.parse(aih.ENI);
    decrypted = CryptoJS.AES.decrypt(val, aih.Enc.Key, {
      keySize: 256 / 8,
      iv: aih.Enc.IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
  }
  result = decrypted.toString(CryptoJS.enc.Utf8);
  return result;
}
