import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // Импортируем BrowserRouter
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      {" "}
      {/* Оборачиваем все приложение в BrowserRouter */}
      <App />
    </BrowserRouter>
  </Provider>
);
