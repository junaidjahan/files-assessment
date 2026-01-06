import { Anchor, Breadcrumbs } from "@mantine/core";
import { memo } from "react";

export type FolderV2NavigationProps = { title: string };

export const FolderV2Navigation = memo<FolderV2NavigationProps>((props) => {
  return (
    <Breadcrumbs>
      <Anchor underline="never" size="xl" p={20}>
        {props.title}
      </Anchor>
    </Breadcrumbs>
  );
});
