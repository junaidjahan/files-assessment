import { Outlet, Link, useLocation } from "react-router-dom";
import { Button, Paper, Stack } from "@mantine/core";
import { LAYOUT } from "~/constants";

export const Sidebar = () => {
  const location = useLocation();

  return (
    <Paper
      withBorder
      style={{
        width: LAYOUT.SIDEBAR_WIDTH,
        height: "100dvh",
        background: "#f9f9f9",
        padding: LAYOUT.SIDEBAR_PADDING,
      }}
    >
      <Stack>
        <Button
          component={Link}
          to="/"
          variant={location.pathname === "/" ? "filled" : "default"}
        >
          Homepage
        </Button>

        <Button
          component={Link}
          to="/favorites"
          variant={location.pathname === "/favorites" ? "filled" : "default"}
        >
          Favorites
        </Button>
      </Stack>
    </Paper>
  );
};

export const DefaultLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100vh",
      }}
    >
      <Sidebar />

      <div
        style={{
          padding: LAYOUT.CONTENT_PADDING,
          flex: 1,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};
