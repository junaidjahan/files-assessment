import { Virtuoso } from "react-virtuoso";
import { FolderV2 } from "~/components/FolderV2";
import { API_ENDPOINTS } from "~/constants";
import { useItems } from "~/hooks";
import type { MenuOption } from "~/types";

const homepageOptions: MenuOption[] = [
  {
    label: "Mark as Favorite",
    onClick() {
      alert("Marked as Favorite");
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

export const Homepage = () => {
  const { data, loading } = useItems(API_ENDPOINTS.ITEMS);

  if (loading) {
    return <FolderV2.SkeletonLoader />;
  }

  return (
    <FolderV2>
      <FolderV2.Navigation title="Homepage" />

      <FolderV2.Tabs>
        <FolderV2.View>
          {data.map((item) => (
            <FolderV2.ViewItem
              item={item}
              actions={
                <FolderV2.Actions item={item} options={homepageOptions} />
              }
            />
          ))}
        </FolderV2.View>
      </FolderV2.Tabs>
    </FolderV2>
  );
};
