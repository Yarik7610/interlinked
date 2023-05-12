import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./Redux/redux-store";
import { Provider } from "react-redux";
import SamuraiJSApp from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
    // <BrowserRouter>
    //   <Provider store={store}>
        <SamuraiJSApp />
    //   </Provider>
    // </BrowserRouter>
  // </React.StrictMode>
);
