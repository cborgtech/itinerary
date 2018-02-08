import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import history from "./history";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import reducer from "./reducers/signin-reducer";
import App from "./components/App";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { signInUser } from "./actions/index-actions";
import { firebaseApp } from "./firebase";

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    const { email } = user;
    store.dispatch(signInUser(email));
    history.push("/app");
  } else {
    history.replace("/signin");
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={history}>
      <div>
        <Route path="/app" component={App} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
