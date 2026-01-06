export interface Item {
  id: number;
  name: string;
  type: 'file' | 'folder';
  createdAt: string;
  updatedAt: string;
}

export interface MenuOption {
  label: string;
  onClick: (item?: Item) => void;
}

export interface ItemsResponse {
  items: Item[];
}
