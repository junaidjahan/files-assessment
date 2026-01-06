import { Tabs } from "@mantine/core";
import { useAtom } from "jotai";
import { memo, type PropsWithChildren } from "react";
import { viewTabAtom } from "~/atoms";
import { ViewTab } from "~/utils/enums";

export const FolderV2Tabs = memo<PropsWithChildren>(({ children }) => {
  const [viewTab, setViewTab] = useAtom(viewTabAtom);

  return (
    <Tabs
      value={viewTab}
      onChange={(val) => setViewTab((val as ViewTab) ?? ViewTab.Grid)}
      mt={20}
    >
      <Tabs.List mb={20}>
        <Tabs.Tab value={ViewTab.Grid}>Grid View</Tabs.Tab>
        <Tabs.Tab value={ViewTab.Table}>Table View</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value={viewTab}>{children}</Tabs.Panel>
    </Tabs>
  );
});
