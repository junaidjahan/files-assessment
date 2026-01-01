import { Link, useLocation } from "react-router-dom";
import { Button, Paper, Stack } from "@mantine/core";
import { LAYOUT } from "~/constants";

export interface NavItem {
  label: string;
  path: string;
}

interface SidebarProps {
  items?: NavItem[];
}

const defaultItems: NavItem[] = [
  { label: "Homepage", path: "/" },
  { label: "Favorites", path: "/favorites" },
];

export const Sidebar = ({ items = defaultItems }: SidebarProps) => {
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
        {items.map((item) => (
          <Button
            key={item.path}
            component={Link}
            to={item.path}
            variant={location.pathname === item.path ? "filled" : "default"}
          >
            {item.label}
          </Button>
        ))}
      </Stack>
    </Paper>
  );
};
