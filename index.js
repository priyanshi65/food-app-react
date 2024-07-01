import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./app";
import './index.css';
// import './style.css';
import { RouterProvider } from "react-router-dom";
import { routes } from "./src/routes";
import 'bootstrap/dist/css/bootstrap.min.css';



const application = ReactDOM.createRoot(document.getElementById("root"));
application.render(
  <RouterProvider router={routes}>
    <App/>
  </RouterProvider>
)
