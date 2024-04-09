import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import reduxConfig from "./reduxConfig";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from 'react-redux';

const { store, persistor } = reduxConfig()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>


);
