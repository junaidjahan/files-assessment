import { Badge, Card, Group, Text } from "@mantine/core";
import { memo, type ReactNode } from "react";
import type { Item } from "~/types";
import { formatDateTime } from "~/utils";

export interface FolderGridViewCardProps {
  item: Item;
  actions?: ReactNode;
}

export const FolderGridViewCard = memo(({ item, actions }: FolderGridViewCardProps) => {
  return (
    <Card shadow="sm" radius="md" padding="lg" withBorder style={{ overflow: "visible" }}>
      <Group justify="space-between" mb="xs">
        <Group gap="xs">
          <Text fw={600}>{item.name}</Text>

          <Badge color={item.type === "folder" ? "blue" : "gray"} variant="light" radius="sm">
            {item.type}
          </Badge>
        </Group>

        {actions}
      </Group>

      <Text size="sm" c="dimmed">
        Created: {formatDateTime(item.createdAt)}
      </Text>
      <Text size="sm" c="dimmed">
        Updated: {formatDateTime(item.updatedAt)}
      </Text>
    </Card>
  );
});
