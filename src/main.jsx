import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ModalProvider, EventsProvider } from "./contexts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalProvider>
      <EventsProvider>
        <App />
      </EventsProvider>
    </ModalProvider>
  </React.StrictMode>
);
