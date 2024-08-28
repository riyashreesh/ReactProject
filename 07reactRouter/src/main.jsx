import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./User/User.jsx";
import Github from "./components/Github/Github.jsx";

// 1st way to create router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "About",
        element: <About />,
      },

      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "user/:Userid",
        element: <User />,
      },

      {
        path: "Github",

        element: <Github />,
      },
    ],
  },
]);

// const router = createBrowserRouter([
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="About" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="user/:Userid" element={<User />} />
//       <Route path="/Github" element={<Github />} />
//     </Route>
//   ),
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
