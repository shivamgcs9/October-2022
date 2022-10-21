import { dark } from "@mui/material/styles/createPalette";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Outlet />
            </Wrapper>
          </Main>
        </Container>
      </ThemeProvider>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/video/:id",
        element: <Video />,
      },
    ],
  },
]);

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
