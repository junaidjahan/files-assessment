import { Paper, Stack, Tabs } from "@mantine/core";
import { useState } from "react";
import type { Item, MenuOption } from "~/types";
import { LAYOUT, VIEW_TABS } from "~/constants";
import { FolderNavigation } from "./FolderNavigation";
import { GridSkeleton } from "./Skeleton";

export interface FolderProps {
  data: Item[];
  navTitle: string;
  gridView: (props: { items?: Item[]; options?: MenuOption[] }) => JSX.Element;
  tableView: (props: { items?: Item[]; options?: MenuOption[] }) => JSX.Element;
  options?: MenuOption[];
  loading?: boolean;
}

export const Folder = ({
  data,
  navTitle,
  gridView: GridView,
  tableView: TableView,
  options,
  loading = false,
}: FolderProps) => {
  const [activeTab, setActiveTab] = useState<string>(VIEW_TABS.GRID);

  const ViewComponent = activeTab === VIEW_TABS.GRID ? GridView : TableView;

  return (
    <Paper p="md" style={{ margin: LAYOUT.PAPER_MARGIN }}>
      <FolderNavigation title={navTitle} />

      <Tabs
        value={activeTab}
        onChange={(val: string | null) => setActiveTab(val || VIEW_TABS.GRID)}
        style={{ marginTop: 20, marginBottom: 20 }}
      >
        <Tabs.List>
          <Tabs.Tab value={VIEW_TABS.GRID}>Grid View</Tabs.Tab>
          <Tabs.Tab value={VIEW_TABS.TABLE}>Table View</Tabs.Tab>
        </Tabs.List>
      </Tabs>

      <Stack>
        {loading ? (
          <GridSkeleton />
        ) : (
          <ViewComponent items={data} options={options} />
        )}
      </Stack>
    </Paper>
  );
};
