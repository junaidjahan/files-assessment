import { Table } from "@mantine/core";
import { memo, type PropsWithChildren } from "react";

export const FolderTableView = memo<PropsWithChildren>(({ children }) => {
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

      <Table.Tbody>{children}</Table.Tbody>
    </Table>
  );
});
