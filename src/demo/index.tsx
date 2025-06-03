import React from "react";
import ReactDOM from "react-dom/client";
import ButtonDemo from "./ButtonDemo";
import "../style.css"; // O tu Tailwind base global

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ButtonDemo />
  </React.StrictMode>,
);
