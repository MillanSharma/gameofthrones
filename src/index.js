import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotals } from "./slices/cartSlice";

const container = document.getElementById("root");
const root = createRoot(container);

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.dispatch(getTotals());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
