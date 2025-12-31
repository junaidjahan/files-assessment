import { Folder } from "~/components";
import { GridView, TableView } from "~/components/Folder/View/";
import { API_ENDPOINTS } from "~/constants";
import { useItems } from "~/hooks";

export const Homepage = () => {
  const { data, loading } = useItems(API_ENDPOINTS.ITEMS);
  const options = [
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

  return (
    <Folder
      navTitle="Homepage"
      data={data}
      gridView={GridView}
      tableView={TableView}
      loading={loading}
      options={options}
    />
  );
};
