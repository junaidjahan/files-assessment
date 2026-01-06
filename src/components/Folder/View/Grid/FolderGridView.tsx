import { SimpleGrid } from "@mantine/core";
import { memo, type PropsWithChildren } from "react";

export const FolderGridView = memo<PropsWithChildren>(({ children }) => {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="lg" verticalSpacing="lg">
      {children}
    </SimpleGrid>
  );
});
