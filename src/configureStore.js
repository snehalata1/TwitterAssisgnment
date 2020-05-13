/* eslint-disable */
import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import reducers from "./reducers";
import apiMiddleware from "./utils/apiMiddleware";

window.onerror = function (message, file, line) {
  console.log(
    "An error occured at line " + line + " of " + file + ": " + message
  );
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(logger, apiMiddleware))
);
