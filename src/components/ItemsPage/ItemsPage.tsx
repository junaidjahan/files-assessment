import type { ReactNode } from "react";
import { FolderComposed } from "~/components/Folder";
import { GridView, TableView } from "~/components/Folder/View";
import { useItems } from "~/hooks";
import { VIEW_TABS } from "~/constants";
import type { MenuOption } from "~/types";

interface ItemsPageProps {
  title: string;
  endpoint: string;
  options: MenuOption[];
  customContent?: ReactNode;
}

export const ItemsPage = ({
  title,
  endpoint,
  options,
  customContent,
}: ItemsPageProps) => {
  const { data, loading } = useItems(endpoint);

  return (
    <FolderComposed items={data} options={options} loading={loading}>
      <FolderComposed.Header title={title} />

      <FolderComposed.Tabs>
        <FolderComposed.TabPanel value={VIEW_TABS.GRID}>
          <FolderComposed.Content>
            {({ items, options }) => <GridView items={items} options={options} />}
          </FolderComposed.Content>
        </FolderComposed.TabPanel>

        <FolderComposed.TabPanel value={VIEW_TABS.TABLE}>
          <FolderComposed.Content>
            {({ items, options }) => (
              <TableView items={items} options={options} />
            )}
          </FolderComposed.Content>
        </FolderComposed.TabPanel>
      </FolderComposed.Tabs>

      {customContent}
    </FolderComposed>
  );
};
