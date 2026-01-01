import { Outlet } from "react-router-dom";
import { LAYOUT } from "~/constants";
import { Sidebar } from "~/components";

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
