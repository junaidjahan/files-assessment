import { ItemsPage } from "~/components";
import { API_ENDPOINTS } from "~/constants";
import type { MenuOption } from "~/types";

const homepageOptions: MenuOption[] = [
  {
    label: "Mark as Favorite",
    onClick() {
      alert("Marked as Favorite");
    },
  },
  {
    label: "Share",
    onClick() {
      alert("Shared");
    },
  },
  {
    label: "Delete",
    onClick() {
      alert("Deleted");
    },
  },
];

export const Homepage = () => {
  return (
    <ItemsPage
      title="Homepage"
      endpoint={API_ENDPOINTS.ITEMS}
      options={homepageOptions}
    />
  );
};
