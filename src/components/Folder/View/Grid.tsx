import { Card, Text, SimpleGrid, Group, Badge } from "@mantine/core";
import type { Item, MenuOption } from "~/types";
import { formatDateTime } from "~/utils";
import { FolderActions } from "../FolderActions";

export interface GridViewProps {
  items?: Item[];
  options?: MenuOption[];
}

export const GridView = ({ items, options }: GridViewProps) => {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
      spacing="lg"
      verticalSpacing="lg"
    >
      {items?.map((item) => (
        <Card
          key={item.id}
          shadow="sm"
          radius="md"
          padding="lg"
          withBorder
          style={{ overflow: "visible" }}
        >
          <Group justify="space-between" mb="xs">
            <Group gap="xs">
              <Text fw={600}>{item.name}</Text>

              <Badge
                color={item.type === "folder" ? "blue" : "gray"}
                variant="light"
                radius="sm"
              >
                {item.type}
              </Badge>
            </Group>

            <FolderActions item={item} options={options} />
          </Group>

          <Text size="sm" c="dimmed">
            Created: {formatDateTime(item.createdAt)}
          </Text>
          <Text size="sm" c="dimmed">
            Updated: {formatDateTime(item.updatedAt)}
          </Text>
        </Card>
      ))}
    </SimpleGrid>
  );
};
