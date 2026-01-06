import { FolderV2 } from "~/components/FolderV2";
import { API_ENDPOINTS } from "~/constants";
import { useItems } from "~/hooks";
import type { Item, MenuOption } from "~/types";

const favoritesOptions: MenuOption[] = [
  {
    label: "Remove from Favorites",
    onClick(item?: Item) {
      if (item) {
        alert(`${item.name} removed from Favorites`);
      }
    },
  },
  {
    label: "Open item location",
    onClick() {
      alert("Opened");
    },
  },
  {
    label: "Share",
    onClick() {
      alert("Shared");
    },
  },
  {
    label: "Delete",
    onClick() {
      alert("Deleted");
    },
  },
];

export const Favorites = () => {
  const { data, loading } = useItems(API_ENDPOINTS.FAVORITES);

  if (loading) {
    return <FolderV2.SkeletonLoader />;
  }

  return (
    <FolderV2>
      <FolderV2.Navigation title="Favorites" />

      <FolderV2.Tabs>
        <FolderV2.View>
          {data.map((item) => (
            <FolderV2.ViewItem item={item} actions={<FolderV2.Actions item={item} options={favoritesOptions} />} />
          ))}
        </FolderV2.View>
      </FolderV2.Tabs>
    </FolderV2>
  );
};
