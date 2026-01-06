import { Virtuoso } from "react-virtuoso";
import { Folder } from "~/components/Folder";
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
    return <Folder.SkeletonLoader />;
  }

  return (
    <Folder>
      <Folder.Navigation title="Homepage" />

      <Folder.Tabs>
        <Folder.View>
          {data.map((item) => (
            <Folder.ViewItem
              item={item}
              actions={
                <Folder.Actions item={item} options={homepageOptions} />
              }
            />
          ))}
        </Folder.View>
      </Folder.Tabs>
    </Folder>
  );
};
