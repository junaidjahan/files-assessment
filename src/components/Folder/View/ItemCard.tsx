import { Card, Text, Group, Badge } from "@mantine/core";
import type { Item, MenuOption } from "~/types";
import { formatDateTime } from "~/utils";
import { FolderActions } from "../FolderActions";

export interface ItemCardProps {
  item: Item;
  options?: MenuOption[];
}

export const ItemCard = ({ item, options }: ItemCardProps) => {
  return (
    <Card
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
  );
};
