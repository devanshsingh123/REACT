import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Contact } from "./pages/Contact";
import { Navbar } from "./components/Navbar";

export default function App() {
  // define routes with layout
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />, // layout route
      children: [
        {
          index: true, // means path: "/"
          element: <Home />
        },
        {
          path: "list", // relative path: "/list"
          element: <List />
        },
        {
          path: "contact", // relative path: "/contact"
          element: <Contact />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}
