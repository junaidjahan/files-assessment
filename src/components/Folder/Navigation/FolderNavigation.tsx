import { Anchor, Breadcrumbs } from "@mantine/core";
import { memo } from "react";

export type FolderNavigationProps = { title: string };

export const FolderNavigation = memo<FolderNavigationProps>((props) => {
  return (
    <Breadcrumbs>
      <Anchor underline="never" size="xl" p={20}>
        {props.title}
      </Anchor>
    </Breadcrumbs>
  );
});
