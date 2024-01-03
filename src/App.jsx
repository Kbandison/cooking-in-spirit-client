import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Nav from "./Pages/Nav";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [{ index: true, path: "/", element: <Dashboard /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
