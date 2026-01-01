import { ItemsPage } from "~/components";
import { API_ENDPOINTS } from "~/constants";
import type { Item, MenuOption } from "~/types";

const favoritesOptions: MenuOption[] = [
  {
    label: "Remove from Favorites",
    onClick(item?: Item) {
      if (item) {
        alert(`${item.name} removed from Favorites`);
      }
    },
  },
  {
    label: "Open item location",
    onClick() {
      alert("Opened");
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

export const Favorites = () => {
  return (
    <ItemsPage
      title="Favorites"
      endpoint={API_ENDPOINTS.ITEMS}
      options={favoritesOptions}
    />
  );
};
