// import React from "react";
// import ReactDOM from "react-dom/client";
// import Main from "./Main";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   // <React.StrictMode>
//   <Main />
//   // </React.StrictMode>
// );
//-------------------------------------------------------------------
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import main from "./main";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={main} />
  // </React.StrictMode>
);
