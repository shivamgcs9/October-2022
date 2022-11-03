import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import "./app.scss";
import Menu from "./components/menu/Menu";

const App = () => {
  const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Outlet />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
