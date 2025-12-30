import { createTheme, MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { Favorites, Homepage } from "./pages";

import "@mantine/core/styles.css";

const theme = createTheme({});

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "favorites", element: <Favorites /> },
    ],
  },
]);

export const App = () => {
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  );
};
