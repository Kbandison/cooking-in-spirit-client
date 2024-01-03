import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Hero from "./Components/Hero";

function App() {
  const router = createBrowserRouter([
    {
      index: true,
      path: "/",
      element: <Dashboard />,
      // children: { index: true, element: <Hero /> },
    },
  ]);

  return <RouterProvider router={router} />;
  // return (
  //   <div>
  //     <h1>Test</h1>
  //   </div>
  // );
}

export default App;
