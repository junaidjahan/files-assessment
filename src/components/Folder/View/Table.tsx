import { Table } from "@mantine/core";
import type { Item, MenuOption } from "~/types";
import { ItemRow } from "./ItemRow";

export interface TableViewProps {
  items?: Item[];
  options?: MenuOption[];
}

export const TableView = ({ items, options }: TableViewProps) => {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>ID</Table.Th>
          <Table.Th>Name</Table.Th>
          <Table.Th>Type</Table.Th>
          <Table.Th>Created At</Table.Th>
          <Table.Th>Updated At</Table.Th>
          <Table.Th>Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>
        {items?.map((item) => (
          <ItemRow key={item.id} item={item} options={options} />
        ))}
      </Table.Tbody>
    </Table>
  );
};
