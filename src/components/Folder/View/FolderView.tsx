import { useAtomValue } from "jotai";
import { memo, type FC, type PropsWithChildren } from "react";
import { viewTabAtom } from "~/atoms";
import { ViewTab } from "~/utils/enums";
import { FolderGridView } from "./Grid";
import { FolderTableView } from "./Table";

const ViewComponents: Record<ViewTab, FC<PropsWithChildren>> = {
  [ViewTab.Grid]: FolderGridView,
  [ViewTab.Table]: FolderTableView,
};

export const FolderView = memo<PropsWithChildren>(({ children }) => {
  const viewTab = useAtomValue(viewTabAtom);

  const ViewComponent = ViewComponents[viewTab];

  return <ViewComponent>{children}</ViewComponent>;
});
