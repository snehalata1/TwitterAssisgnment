/* eslint-disable */
const config = {
  apiBaseUrl:
    process.env.NODE_ENV === "development"
      ? "https://www.tronalddump.io"
      : "https://www.tronalddump.io",              // https://www.tronalddump.io
  // partnerCode: "BFL",
  // applicationCode: "AIH_HRA_PORTAL",
  // uTMSource: "DRX_REG",
  // snackBarVariant: {
  //   error: "error",
  //   success: "success",
  //   warning: "warning",
  //   info: "info",
  // },
  // appointmentStatus: {
  //   WaitingInClinic: "WIC",
  //   Active: "ACT",
  //   Upcoming: "BOOKED,RES",
  //   Cancelled: "CAN",
  //   Completed: "COM",
  // },
};

export default config;
