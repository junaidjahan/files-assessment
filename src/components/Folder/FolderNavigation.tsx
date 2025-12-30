import { Breadcrumbs, Anchor } from "@mantine/core";
import styles from "./FolderNavigation.module.scss";

export const FolderNavigation = (props: { title: string }) => {
  return (
    <Breadcrumbs>
      <Anchor underline="never" size="xl" className={styles.nav}>
        {props.title}
      </Anchor>
    </Breadcrumbs>
  );
};
