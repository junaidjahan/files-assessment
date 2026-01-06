import { useAtomValue } from "jotai";
import { memo, type FC, type ReactNode } from "react";
import { viewTabAtom } from "~/atoms";
import type { Item } from "~/types";
import { ViewTab } from "~/utils/enums";
import { FolderV2GridViewCard } from "../Grid";
import { FolderV2TableViewRow } from "../Table";

export interface FolderV2TableViewRowProps {
  item: Item;
  actions?: ReactNode;
}

const ViewItemComponents: Record<ViewTab, FC<FolderV2TableViewRowProps>> = {
  [ViewTab.Grid]: FolderV2GridViewCard,
  [ViewTab.Table]: FolderV2TableViewRow,
};

export const FolderV2ViewItem = memo<FolderV2TableViewRowProps>(({ item, actions }) => {
  const viewTab = useAtomValue(viewTabAtom);

  const ViewItemComponent = ViewItemComponents[viewTab];

  return <ViewItemComponent item={item} actions={actions} />;
});
