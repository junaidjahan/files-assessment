import { Card, Text, SimpleGrid, Group, Badge } from "@mantine/core";
import { FolderActions } from "../FolderActions";

export const GridView = ({ items, options }) => {
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
            Created: {new Date(item.createdAt).toLocaleDateString("en-US")} at{" "}
            {new Date(item.createdAt).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </Text>
          <Text size="sm" c="dimmed">
            Updated: {new Date(item.updatedAt).toLocaleDateString("en-US")} at{" "}
            {new Date(item.updatedAt).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </Text>
        </Card>
      ))}
    </SimpleGrid>
  );
};
