import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SignIn from "./Components/SignIn/SignIn.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import ExplorePet from "./Components/ExplorePet/ExplorePet.jsx";
import Store from "./Components/Store/Store.jsx";
import Layout from "./Layout.jsx";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<App />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/explore-pet" element={<ExplorePet />} />
      <Route path="/store" element={<Store />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
