import { Table } from "@mantine/core";
import type { Item, MenuOption } from "~/types";
import { formatDateTime } from "~/utils";
import { FolderActions } from "../FolderActions";

export interface ItemRowProps {
  item: Item;
  options?: MenuOption[];
}

export const ItemRow = ({ item, options }: ItemRowProps) => {
  return (
    <Table.Tr>
      <Table.Td>{item.id}</Table.Td>
      <Table.Td>{item.name}</Table.Td>
      <Table.Td>{item.type}</Table.Td>
      <Table.Td>{formatDateTime(item.createdAt)}</Table.Td>
      <Table.Td>{formatDateTime(item.updatedAt)}</Table.Td>
      <Table.Td>
        <FolderActions item={item} options={options} />
      </Table.Td>
    </Table.Tr>
  );
};
