import { createContext, useContext, useState, type ReactNode } from "react";
import { Paper, Stack, Tabs } from "@mantine/core";
import type { Item, MenuOption } from "~/types";
import { LAYOUT, VIEW_TABS } from "~/constants";
import { FolderNavigation } from "./FolderNavigation";
import { GridSkeleton } from "./Skeleton";

interface FolderContextValue {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  items: Item[];
  options?: MenuOption[];
  loading: boolean;
}

const FolderContext = createContext<FolderContextValue | null>(null);

const useFolderContext = () => {
  const context = useContext(FolderContext);
  if (!context) {
    throw new Error("Folder compound components must be used within Folder");
  }
  return context;
};

interface FolderRootProps {
  items: Item[];
  options?: MenuOption[];
  loading?: boolean;
  children: ReactNode;
}

const FolderRoot = ({
  items,
  options,
  loading = false,
  children,
}: FolderRootProps) => {

  const [activeTab, setActiveTab] = useState<string>(VIEW_TABS.GRID);

  return (
    <FolderContext.Provider
      value={{ activeTab, setActiveTab, items, options, loading }}
    >
      <Paper p="md" style={{ margin: LAYOUT.PAPER_MARGIN }}>
        {children}
      </Paper>
    </FolderContext.Provider>
  );
};

interface FolderHeaderProps {
  title: string;
}

const FolderHeader = ({ title }: FolderHeaderProps) => {
  return <FolderNavigation title={title} />;
};

interface FolderTabsProps {
  children: ReactNode;
}

const FolderTabs = ({ children }: FolderTabsProps) => {
  const { activeTab, setActiveTab } = useFolderContext();

  return (
    <Tabs
      value={activeTab}
      onChange={(val: string | null) => setActiveTab(val || VIEW_TABS.GRID)}
      style={{ marginTop: 20, marginBottom: 20 }}
    >
      <Tabs.List>
        <Tabs.Tab value={VIEW_TABS.GRID}>Grid View</Tabs.Tab>
        <Tabs.Tab value={VIEW_TABS.TABLE}>Table View</Tabs.Tab>
      </Tabs.List>

      {children}
    </Tabs>
  );
};

interface FolderTabPanelProps {
  value: string;
  children: ReactNode;
}

const FolderTabPanel = ({ value, children }: FolderTabPanelProps) => {
  const { activeTab } = useFolderContext();

  if (activeTab !== value) {
    return null;
  }

  return <Tabs.Panel value={value}>{children}</Tabs.Panel>;
};

interface FolderContentProps {
  children: (context: FolderContextValue) => ReactNode;
}

const FolderContent = ({ children }: FolderContentProps) => {
  const context = useFolderContext();

  return (
    <Stack>
      {context.loading ? <GridSkeleton /> : children(context)}
    </Stack>
  );
};

export const FolderComposed = Object.assign(FolderRoot, {
  Header: FolderHeader,
  Tabs: FolderTabs,
  TabPanel: FolderTabPanel,
  Content: FolderContent,
});
