import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import AutoLogin from "./autologin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AutoLogin>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AutoLogin>
    </Provider>
  </React.StrictMode>
);
