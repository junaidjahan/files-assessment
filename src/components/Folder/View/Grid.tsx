import { SimpleGrid } from "@mantine/core";
import type { Item, MenuOption } from "~/types";
import { ItemCard } from "./ItemCard";

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
        <ItemCard key={item.id} item={item} options={options} />
      ))}
    </SimpleGrid>
  );
};
