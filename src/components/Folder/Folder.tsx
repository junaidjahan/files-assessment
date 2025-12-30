import { Paper, Stack, Tabs } from "@mantine/core";
import { useEffect, useState, type FC } from "react";
import { FolderNavigation } from "./FolderNavigation";

type Item = {
  id: number;
  name: string;
  type: string;
  createdAt: string;
  updatedAt: string;
};

export const Folder = (props: {
  data: Array<Item>;
  navTitle: string;
  gridView: FC<any>;
  tableView: FC<any>;
  options?: Array<{ label: string; onClick: Function }>;
}) => {
  const [data, setData] = useState<any>();
  const [activeTab, setActiveTab] = useState("grid");

  useEffect(() => {
    setData(props.data);
  }, [props]);

  let ViewComponent: any;
  if (activeTab === "grid") {
    ViewComponent = props.gridView;
  } else {
    ViewComponent = props.tableView;
  }

  return (
    <Paper p="md" style={{ margin: 20 }}>
      <FolderNavigation title={props.navTitle} />

      <Tabs value={activeTab} onChange={(val) => setActiveTab(val as any)} style={{ marginTop: 20, marginBottom: 20 }}>
        <Tabs.List>
          <Tabs.Tab value="grid">Grid View</Tabs.Tab>
          <Tabs.Tab value="table">Table View</Tabs.Tab>
        </Tabs.List>
      </Tabs>

      <Stack>
        <ViewComponent items={data} options={props.options} />
      </Stack>
    </Paper>
  );
};
