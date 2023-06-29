import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/main.min.css";
import "./fonts/stylesheet.css";
import { ContextProvider } from "./context/context.jsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>
);
