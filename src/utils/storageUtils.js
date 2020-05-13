/* eslint-disable */
import { encrypt, decrypt } from './encrypt';
// import { getRandomIntFromInterval } from 'utils/request';

export function setContext(data) {
  // const randomNumber = getRandomIntFromInterval(10, 99);
  const encryptedData = encrypt((JSON.stringify(data)));
  localStorage.setItem('context', encryptedData);
}

export function getContext() {
  try {
    const context = localStorage.getItem('context');
    if (context) {
      return JSON.parse(decrypt(context));
    }
    return '';
  } catch (err) {
    return '';
  }
}

export function getUserDataLocalstorage() {
  try {
    const userData = localStorage.getItem('userData');
    if (userData) {
      return JSON.parse(userData);
    }
    return '';
  } catch (err) {
    return '';
  }
}

export const handleDeleteCookie = (cname) => {
  const d = new Date();
  d.setTime(d.getTime() - (1000 * 60 * 60 * 24));
  const expires = `expires= ${d.toGMTString()}`;
  window.document.cookie = `${cname}=;${expires}`;
  return '';
};

export const handleGetCookie = (cname) => {
  const name = `${cname} =`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

export const handleSetCookie = (name, value) => {
  const cname = handleGetCookie(name);
  if (cname === '' && value !== '') {
    handleDeleteCookie(cname);
    const d = new Date();
    d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
    const expires = `expires= ${d.toGMTString()}`;
    const hostName = window.location.hostname;
    const damainName = hostName.substring(hostName.lastIndexOf('.', hostName.lastIndexOf('.') - 1) + 1);
    const cookieDomain = `domain=.${damainName}`;
    document.cookie = `${name}=${value}; ${expires};path=/;${cookieDomain}`;
  }
  return '';
};
