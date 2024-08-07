import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/globals.css";
import React from "react";

const isStrictMode = import.meta.env.DEV;

ReactDOM.createRoot(document.getElementById("root")!).render(
  isStrictMode ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : (
    <App />
  )
);
