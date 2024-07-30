import React from "react";
import ReactDOM from "react-dom/client";
import Desktop from "./Desktop.tsx";
import "./styles/index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Desktop />
    </Provider>
  </React.StrictMode>
);
