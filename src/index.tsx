import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import Header from "./components/Header";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <StrictMode>
      <Header />
      <App />
    </StrictMode>
  </BrowserRouter>
);
