/* eslint-disable */
import axios from 'axios';
import config from '../config';
import moment from 'moment';
import { encrypt, decrypt } from './encrypt';

/**
 * Parses the request returned by a network request
 *
 * @param {object} response A response from a network request
 *
 * @return {object} The parsed JSON from a request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  if (response.config.url.indexOf('/proxy/Prescription/DownloadPrescription') > -1) {
    return response.data;
  }
  if (response.config.url.indexOf('/proxy/Invoice/DownloadInvoice') > -1) {
    return response.data;
  }
  if (response.config.url.includes('maps.googleapis.com')) {
    return response.data;
  }

  if (response.config.url.includes('/Proxy/Document/DownloadAttachement')) {
    return response.data;
  }

  if (response.config.url.includes('https://www.tronalddump.io')) {
    return response.data;
  }

  if (response.config.url.includes('/Proxy/Document/DownloadAttachement')) {
    return response.data;
  }

  // some responses would not need parsing. return them as is.
  if ((response.config.url.indexOf('?id=TNC') > -1) || (response.config.url.indexOf('Document/Upload') > -1) || (response.config.url.indexOf('blogs.vivant.me') > -1) || (response.config.url.indexOf('Document/UploadPatientAttachments') > -1)) {
    return response.data;
  }

  if (typeof response === 'object') {
    let data = response.data;
    if (response.data) {
      if (response.config.url.includes('https://blogs.vivant.me')) {
        return response.data;
      }
      data = JSON.parse(response.data);
      if (data.Header && data.Header.Errors && data.Header.Errors.length > 0) {
        const errorCode = data.Header.Errors[0].ErrorNumber;
        // const accessToken = localStorage.getItem('accessToken');
        if (errorCode === 1100014) {
          // window.location = "/login";
          if (window.localStorage) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('context');
          }
        }

        if (errorCode === 30001651) {
          data = JSON.parse(data.JSONData);
        } else {
          const error = new Error(data.Header.Errors[0].Message);
          error.response = response;
          throw error;
        }

        // Commenting this snippet for now, As per discussion with Shubham this was meant to fix dashboard redirection to login, if the accessToken has expired. Ideally the API should return the above error code in such a case.
        // if (accessToken === null) {
        //   window.location = '/login';
        //   localStorage.removeItem('accessToken');
        //   localStorage.removeItem('context');
        // }
      }
      if (data.JSONData) {
        data = JSON.parse(data.JSONData);
        if (data.Response && data.Response.ErrorMessages) {
          const error = new Error(data.Response.ErrorMessages);
          error.response = response;
          throw error;
        }
      }
    }
    return data;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param {object} response A response from a network request
 *
 * @return {object|undefined} Returns either the response or throws an error
 */
function checkStatus(response) {

  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function getRandomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
  * Axios request interceptor
*/
axios.interceptors.request.use((requestConfig) => {
  if (requestConfig.url.includes('maps.googleapis.com')) {
    return requestConfig;
  }
  if (requestConfig.url.indexOf('/proxy/Prescription/DownloadPrescription') > -1) {
    return requestConfig;
  }
  if (requestConfig.url.indexOf('/proxy/Invoice/DownloadInvoice') > -1) {
    return requestConfig;
  }
  if (requestConfig.url.indexOf('/Proxy/Document/DownloadAttachement') > -1) {
    return requestConfig;
  }
  if (requestConfig.url.indexOf('https://www.tronalddump.io') > -1) {
    return requestConfig;
  }


  const newRequestConfig = requestConfig;
  const accessToken = localStorage.getItem('accessToken');

  const data = {
    Header: {
      ApplicationCode: config.applicationCode,
      APIAccessToken: '',
      EntityType: null, // not required
      AuthTicket: process.env.NODE_ENV === 'development' ? accessToken : accessToken, // accessToken
      DateTime: moment().format('DD-MMM-YYYY'),
      RequestID: '79a8af1c-a8b3-47b6-9a7a-8998c5faba5b',
      PartnerCode: config.partnerCode,
    },
    JSONData: JSON.stringify(requestConfig.data),
  };

  const randomNumber = getRandomIntFromInterval(10, 99);
  const cipher = encrypt((JSON.stringify(data)));
  const encryptedData = `${randomNumber}${data.Header.PartnerCode}###${cipher}`;
  if (newRequestConfig.url.indexOf('Document/Upload') > -1) {
    newRequestConfig.headers['Content-Type'] = 'multipart/form-data';
  } else {
    newRequestConfig.headers['Content-Type'] = 'text/plain;charset=utf-8';
    newRequestConfig.data = encryptedData;
  }
  // newRequestConfig.data = encryptedData;
  // newRequestConfig.withCredentials = true;
  return newRequestConfig;
}, (err) => Promise.reject(err));

/**
  * Axios response interceptor
*/
axios.interceptors.response.use((response) => {
  if (response.config.url.indexOf('/proxy/Prescription/DownloadPrescription') > -1) {
    return response;
  }
  if (response.config.url.indexOf('/proxy/Invoice/DownloadInvoice') > -1) {
    return response;
  }
  if (response.config.url.includes('https://blogs.vivant.me')) {
    return response;
  }
  if (response.config.url.includes('maps.googleapis.com')) {
    return response;
  }
  if ((response.config.url.indexOf('?id=TNC') > -1) || (response.config.url.indexOf('Document/Upload') > -1) || (response.config.url.indexOf('blogs.vivant.me') > -1) || (response.config.url.indexOf('Document/UploadPatientAttachments') > -1)) {
    return response;
  }
  if (response.config.url.includes('/Proxy/Document/DownloadAttachement')) {
    return response;
  }
  if (response.config.url.includes('https://www.tronalddump.io')) {
    return response;
  }

  const decryptedData = decrypt(response.data);
  response.data = decryptedData;
  return response;
}, (err) => Promise.reject(err));

function logResponse(response) {
  return response;
}


/**
 * Requests a URL, returning a promise
 *
 * @param {string} url The URL we want to request
 * @param {object} [options] The options we want to pass to "fetch"
 *
 * @return {object} The response data
 */
export default function request(url, options) {

  const callUrl = url.indexOf('http') === -1 ? `${config.apiBaseUrl}${url}` : url;

  return axios(callUrl, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(logResponse);
}
