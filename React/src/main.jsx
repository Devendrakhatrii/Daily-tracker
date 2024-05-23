import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserConsumer from "./context/index.jsx";
import Product from "./pages/Product.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserConsumer>
      <App />
      <Product />
    </UserConsumer>
  </React.StrictMode>
);
