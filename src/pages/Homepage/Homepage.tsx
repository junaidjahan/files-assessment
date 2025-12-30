import { useEffect, useState } from "react";
import { Folder } from "~/components";
import { GridView, TableView } from "~/components/Folder/View/";

export const Homepage = () => {
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
      navTitle="Homepage"
      data={data}
      gridView={GridView}
      tableView={TableView}
      options={[
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
      ]}
    />
  );
};
