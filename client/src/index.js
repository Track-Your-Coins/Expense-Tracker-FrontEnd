import React from "react";
import ReactDOM from "react-dom";
//import * as serviceWorker from "./serviceWorker";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Footer from "./components/footer/Footer";
import rootReducer from "./reducers/rootReducer";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

const withFooter = WrappedComponent => () => [
  <WrappedComponent key="1" />,
  <Footer key="2" />
];

const Wrapper = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

const WrapperWithFooter = withFooter(Wrapper);

ReactDOM.render(<WrapperWithFooter />, document.getElementById("root"));

//serviceWorker.unregister();
