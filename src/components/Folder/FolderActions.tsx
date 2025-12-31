import { ActionIcon, Paper, Text } from "@mantine/core";
import { IconDots } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import type { Item, MenuOption } from "~/types";
import { Z_INDEX } from "~/constants";

export interface FolderActionsProps {
  item: Item;
  options?: MenuOption[];
}

export const FolderActions = ({ item, options }: FolderActionsProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  if (!options || options.length === 0) {
    return null;
  }

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <ActionIcon
        variant="transparent"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <IconDots size={24} />
      </ActionIcon>

      {open && (
        <Paper
          withBorder
          shadow="md"
          p="xs"
          style={{
            position: "absolute",
            right: 0,
            minWidth: 180,
            top: "100%",
            zIndex: Z_INDEX.DROPDOWN,
            background: "white",
          }}
        >
          {options?.map((option, index) => (
            <Text
              key={index}
              size="sm"
              style={{
                cursor: "pointer",
                padding: 4,
              }}
              onClick={() => {
                option.onClick(item);
                setOpen(false);
              }}
            >
              {option.label}
            </Text>
          ))}
        </Paper>
      )}
    </div>
  );
};
