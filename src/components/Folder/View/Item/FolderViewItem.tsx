import { useAtomValue } from "jotai";
import { memo, type FC, type ReactNode } from "react";
import { viewTabAtom } from "~/atoms";
import type { Item } from "~/types";
import { ViewTab } from "~/utils/enums";
import { FolderGridViewCard } from "../Grid";
import { FolderTableViewRow } from "../Table";

export interface FolderTableViewRowProps {
  item: Item;
  actions?: ReactNode;
}

const ViewItemComponents: Record<ViewTab, FC<FolderTableViewRowProps>> = {
  [ViewTab.Grid]: FolderGridViewCard,
  [ViewTab.Table]: FolderTableViewRow,
};

export const FolderViewItem = memo<FolderTableViewRowProps>(({ item, actions }) => {
  const viewTab = useAtomValue(viewTabAtom);

  const ViewItemComponent = ViewItemComponents[viewTab];

  return <ViewItemComponent item={item} actions={actions} />;
});
