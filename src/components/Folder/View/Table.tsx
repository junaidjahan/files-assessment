import { Table } from "@mantine/core";
import type { Item, MenuOption } from "~/types";
import { formatDateTime } from "~/utils";
import { FolderActions } from "../FolderActions";

export interface TableViewProps {
  items?: Item[];
  options?: MenuOption[];
}

export const TableView = ({ items, options }: TableViewProps) => {
  const rows = items?.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td>{item.id}</Table.Td>
      <Table.Td>{item.name}</Table.Td>
      <Table.Td>{item.type}</Table.Td>
      <Table.Td>{formatDateTime(item.createdAt)}</Table.Td>
      <Table.Td>{formatDateTime(item.updatedAt)}</Table.Td>
      <Table.Td>
        <FolderActions item={item} options={options} />
      </Table.Td>
    </Table.Tr>
  ));

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

      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};
