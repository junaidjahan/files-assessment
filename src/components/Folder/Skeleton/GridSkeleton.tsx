import { Card, Skeleton, SimpleGrid, Group, Stack } from "@mantine/core";

interface GridSkeletonProps {
  count?: number;
}

export const GridSkeleton = ({ count = 8 }: GridSkeletonProps) => {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
      spacing="lg"
      verticalSpacing="lg"
    >
      {Array.from({ length: count }).map((_, index) => (
        <Card
          key={index}
          shadow="sm"
          radius="md"
          padding="lg"
          withBorder
        >
          <Group justify="space-between" mb="xs">
            <Group gap="xs">
              <Skeleton height={20} width={120} />
              <Skeleton height={22} width={50} radius="sm" />
            </Group>
            <Skeleton height={24} width={24} circle />
          </Group>

          <Stack gap="xs">
            <Skeleton height={14} width="80%" />
            <Skeleton height={14} width="75%" />
          </Stack>
        </Card>
      ))}
    </SimpleGrid>
  );
};
