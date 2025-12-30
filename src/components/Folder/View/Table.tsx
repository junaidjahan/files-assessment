import { Table } from "@mantine/core";
import { FolderActions } from "../FolderActions";

export const TableView = ({ items, options }) => {
  const rows = items.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td>{item.id}</Table.Td>
      <Table.Td>{item.name}</Table.Td>
      <Table.Td>{item.type}</Table.Td>
      <Table.Td>
        {new Date(item.updatedAt).toLocaleDateString("en-US")} at{" "}
        {new Date(item.updatedAt).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </Table.Td>
      <Table.Td>{item.updatedAt}</Table.Td>
      <Table.Td>
        <Table.Td>
          <FolderActions item={item} options={options} />
        </Table.Td>
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
