/* eslint-disable */
import apis from "../config/apis";

export const SET_USER_DATA = "SET_USER_DATA";
export const API = "API_CALL";
export const SHOW_LOADER = "SHOW_LOADER";
export const HIDE_LOADER = "HIDE_LOADER";
export const SHOW_SNACKBAR_MESSAGE = "SHOW_SNACKBAR_MESSAGE";
export const LOGOUT = "LOGOUT";

export const checkPhoneNumberExist = (options, callback) => {
  return {
    type: API,
    meta: {
      options,
      url: apis.phoneExists,
      callback,
    },
  };
};

export const checkEmailExist = (options, callback) => {
  return {
    type: API,
    meta: {
      options,
      url: apis.checkIfEmailExists,
      callback,
    },
  };
};

export const setUserData = (payload) => {
  return {
    type: SET_USER_DATA,
    payload,
  };
};

export const generateOtp = (options, callback) => {
  return {
    type: API,
    cleverTap: "generateOtp",
    meta: {
      options,
      url: apis.generateOtp,
      callback,
    },
  };
};

export const verifyOtp = (options, callback) => {
  return {
    type: API,
    meta: {
      options,
      url: apis.validateOtp,
      callback,
    },
  };
};

export const ShowSnackbarMessage = (options) => {
  return {
    type: SHOW_SNACKBAR_MESSAGE,
    key: options.key ? options.key : new Date().getTime() + Math.random(),
    isShow: options.isShow,
    messageType: options.messageType,
    message: options.message,
    innerMessage: options.innerMessage,
    component: options.component,
    persist: options.persist,
    position: options.position,
  };
};

// export const SaveErrorLog = (options, callback) => {
//   return {
//     type: API,
//     meta: {
//       options,
//       url: apis.SaveErrorLog,
//       callback,
//     },
//   };
// };

export const HideSnackbarMessage = (options) => {
  return {
    type: SHOW_SNACKBAR_MESSAGE,
    key: options.key,
    position: options.position,
  };
};

export const setBlankMessage = (options) => {
  return {
    type: SHOW_SNACKBAR_MESSAGE,
    key: "",
    isShow: false,
    messageType: options.messageType,
    message: options.message,
    component: "",
    persist: false,
    position: "",
  };
};

export const getEmedMasterList = (options, callback) => {
  return {
    type: API,
    isLoader: true,
    meta: {
      options,
      url: apis.getEmedMasterList,
      callback,
    },
  };
};

export const getEmedDoctorSuggestionList = (options, callback) => {
  return {
    type: API,
    isLoader: true,
    meta: {
      options,
      url: apis.getEmedDoctorSuggestionList,
      callback,
    },
  };
};

export const getEmedDosageList = (options, callback) => {
  return {
    type: API,
    isLoader: true,
    meta: {
      options,
      url: apis.getEmedDosageList,
      callback,
    },
  };
};

export const getEmedFrequencyList = (options, callback) => {
  return {
    type: API,
    isLoader: true,
    meta: {
      options,
      url: apis.getEmedFrequencyList,
      callback,
    },
  };
};

export const getEmedDurationsList = (options, callback) => {
  return {
    type: API,
    isLoader: true,
    meta: {
      options,
      url: apis.getEmedDurationsList,
      callback,
    },
  };
};

export const getEmedListInstruction = (options, callback) => {
  return {
    type: API,
    isLoader: true,
    meta: {
      options,
      url: apis.getEmedListInstruction,
      callback,
    },
  };
};

export const getEmedDefaultDoses = (options, callback) => {
  return {
    type: API,
    isLoader: true,
    meta: {
      options,
      url: apis.getEmedDefaultDoses,
      callback,
    },
  };
};

export const getEmedFreeTextMedicinesList = (options, callback) => {
  return {
    type: API,
    isLoader: true,
    meta: {
      options,
      url: apis.getDoctorFreeTextMedicinesList,
      callback,
    },
  };
};
export const getDiagnosisSMCT = (options, callback) => {
  return {
    type: API,
    isLoader: false,
    meta: {
      options,
      url: apis.ListDiseasesSMCT,
      callback,
    },
  };
};
export const getListDiagnosisSMCT = (options, callback) => {
  return {
    type: API,
    isLoader: false,
    meta: {
      options,
      url: apis.ListDiseases,
      callback,
    },
  };
};
export const getListSymptomsSMCT = (options, callback) => {
  return {
    type: API,
    isLoader: false,
    meta: {
      options,
      url: apis.ListSymptomsSMCT,
      callback,
    },
  };
};
export const getListSymptoms = (options, callback) => {
  return {
    type: API,
    isLoader: false,
    meta: {
      options,
      url: apis.symptomsLookUp,
      callback,
    },
  };
};
