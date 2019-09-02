import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
//import * as serviceWorker from "./serviceWorker";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

//serviceWorker.unregister();
