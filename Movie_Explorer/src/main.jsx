import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Moviesprovider } from "./context/moviesContext.jsx";

createRoot(document.getElementById("root")).render(
  <Moviesprovider>
    <App />
  </Moviesprovider>
);
