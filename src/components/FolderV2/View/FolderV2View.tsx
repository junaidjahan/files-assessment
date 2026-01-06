import { useAtomValue } from "jotai";
import { memo, type FC, type PropsWithChildren } from "react";
import { viewTabAtom } from "~/atoms";
import { ViewTab } from "~/utils/enums";
import { FolderV2GridView } from "./Grid";
import { FolderV2TableView } from "./Table";

const ViewComponents: Record<ViewTab, FC<PropsWithChildren>> = {
  [ViewTab.Grid]: FolderV2GridView,
  [ViewTab.Table]: FolderV2TableView,
};

export const FolderV2View = memo<PropsWithChildren>(({ children }) => {
  const viewTab = useAtomValue(viewTabAtom);

  const ViewComponent = ViewComponents[viewTab];

  return <ViewComponent>{children}</ViewComponent>;
});
