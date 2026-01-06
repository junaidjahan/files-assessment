import { Table } from "@mantine/core";
import { memo, type ReactNode } from "react";
import type { Item } from "~/types";
import { formatDateTime } from "~/utils";

export interface FolderV2TableViewRowProps {
  item: Item;
  actions?: ReactNode;
}

export const FolderV2TableViewRow = memo(({ item, actions }: FolderV2TableViewRowProps) => {
  return (
    <Table.Tr>
      <Table.Td>{item.id}</Table.Td>
      <Table.Td>{item.name}</Table.Td>
      <Table.Td>{item.type}</Table.Td>
      <Table.Td>{formatDateTime(item.createdAt)}</Table.Td>
      <Table.Td>{formatDateTime(item.updatedAt)}</Table.Td>
      {actions && <Table.Td>{actions}</Table.Td>}
    </Table.Tr>
  );
});
