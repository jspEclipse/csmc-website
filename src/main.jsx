import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./routes/root";
import Charter from "./routes/charter";
import Tshirts from "./routes/tshirts";
import Officers from "./routes/officers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />} />
      <Route path="about" element={<h1>About</h1>} />
      <Route path="charter" element={<Charter />} />
      <Route path="officers" element={<Officers />} />
      <Route path="tshirts" element={<Tshirts />} />

      {/* TODO: php */}
    </>
  ),
  { basename: "/csmc-website/" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
