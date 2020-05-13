/* eslint-disable */
import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useSnackbar } from "notistack";
import * as ConstantTypeAction from "../../actions";

export const Snackbar = (props) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const {
    key,
    messageType,
    message,
    component,
    persist,
    position,
  } = props.snackbar;
  let isSnackbarPersist = false;
  // if (persist) isSnackbarPersist = true;

  if (
    (messageType === undefined || messageType === "") &&
    (message === undefined || message === "") &&
    (key !== undefined || key.toString() !== "")
  ) {
    closeSnackbar(key);
    return null;
  }

  if (messageType !== "") {
    if (messageType === "error" && !message.toLowerCase().includes("sql")) {
      let url = props.history.location.pathname + props.history.location.search;
      const payload = {
        method: "POST",
        data: {
          ErrorLog: {
            AccountID: props.user.data.AccountID,
            EmailAddress: props.user.data.EmailAddress,
            ErrorMessage: `${"DRxUI"} ${message} URL - ${url}`, // " " + message,
            InnerException: `${"DRxUI"} ${message} URL - ${url}`,
            ErrorNumber: "111111",
            Severity: "Moderate",
          },
        },
      };

      // props.constantTypeAction.SaveErrorLog(
      //   payload,
      //   (response, isSuccess) => {}
      // );
    }

    enqueueSnackbar(message, {
      key: key,
      variant: messageType,
      autoHideDuration: 4000,
      action: component,
      persist: isSnackbarPersist,
      preventDuplicate: true,
      anchorOrigin: {
        vertical: position.vertical || "bottom",
        horizontal: position.horizontal || "right",
      },
    });
  }

  return <></>;
};

const mapStateToProps = (state) => ({
  snackbar: state.snackbarMessage,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => {
  const constantTypeAction = bindActionCreators(
    { ...ConstantTypeAction },
    dispatch
  );
  return {
    constantTypeAction,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Snackbar)
);
