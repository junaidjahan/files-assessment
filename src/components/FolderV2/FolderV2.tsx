import { createStore, Provider } from "jotai";
import { memo, type PropsWithChildren } from "react";
import { FolderV2Actions } from "./Actions";
import { FolderV2Navigation } from "./Navigation";
import { FolderV2SkeletonLoader } from "./SkeletonLoader";
import { FolderV2Tabs } from "./Tabs";
import { FolderV2View, FolderV2ViewItem } from "./View";

const store = createStore();

const _FolderV2 = memo<PropsWithChildren>(({ children }) => {
  return <Provider store={store}>{children}</Provider>;
});

export const FolderV2 = Object.assign(_FolderV2, {
  Actions: FolderV2Actions,
  Navigation: FolderV2Navigation,
  View: FolderV2View,
  ViewItem: FolderV2ViewItem,
  SkeletonLoader: FolderV2SkeletonLoader,
  Tabs: FolderV2Tabs,
});
