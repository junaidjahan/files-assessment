import { Folder } from "~/components/Folder";
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
    return <Folder.SkeletonLoader />;
  }

  return (
    <Folder>
      <Folder.Navigation title="Favorites" />

      <Folder.Tabs>
        <Folder.View>
          {data.map((item) => (
            <Folder.ViewItem item={item} actions={<Folder.Actions item={item} options={favoritesOptions} />} />
          ))}
        </Folder.View>
      </Folder.Tabs>
    </Folder>
  );
};
