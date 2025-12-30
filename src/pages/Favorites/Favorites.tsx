import { useEffect, useState } from "react";
import { Folder } from "~/components";
import { GridView, TableView } from "~/components/Folder/View";

export const Favorites = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/items.json")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setData(result.items);
      });
  }, [{}]);

  return (
    <Folder
      navTitle="Favorites"
      data={data}
      gridView={GridView}
      tableView={TableView}
      options={[
        {
          label: "Remove from Favorites",
          onClick(item: any) {
            alert(`${item.name} removed from Favorites`);
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
          onClick(item: unknown) {
            alert("Deleted");
          },
        },
      ]}
    />
  );
};
