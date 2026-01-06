import { createStore, Provider } from "jotai";
import { memo, type PropsWithChildren } from "react";
import { FolderActions } from "./Actions";
import { FolderNavigation } from "./Navigation";
import { FolderSkeletonLoader } from "./SkeletonLoader";
import { FolderTabs } from "./Tabs";
import { FolderView, FolderViewItem } from "./View";

const store = createStore();

const _Folder = memo<PropsWithChildren>(({ children }) => {
  return <Provider store={store}>{children}</Provider>;
});

export const Folder = Object.assign(_Folder, {
  Actions: FolderActions,
  Navigation: FolderNavigation,
  View: FolderView,
  ViewItem: FolderViewItem,
  SkeletonLoader: FolderSkeletonLoader,
  Tabs: FolderTabs,
});
