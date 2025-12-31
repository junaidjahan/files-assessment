import { Folder } from "~/components";
import { GridView, TableView } from "~/components/Folder/View";
import { API_ENDPOINTS } from "~/constants";
import { useItems } from "~/hooks";
import type { Item } from "~/types";

export const Favorites = () => {
  const { data, loading } = useItems(API_ENDPOINTS.ITEMS);
  const options = [
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

  return (
    <Folder
      navTitle="Favorites"
      data={data}
      gridView={GridView}
      tableView={TableView}
      loading={loading}
      options={options}
    />
  );
};
