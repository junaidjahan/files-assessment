import { ActionIcon, Paper, Text } from "@mantine/core";
import { IconDots } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

export const FolderActions = (props: any) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", (e: any) => {
      if (ref.current && !(ref.current as any).contains(e.target)) {
        setOpen(false);
      }
    });
  });

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

      {open ? (
        <Paper
          withBorder
          shadow="md"
          p="xs"
          style={{
            position: "absolute",
            right: 0,
            minWidth: 180,
            top: "100%",
            zIndex: 999999,
            background: "white",
          }}
        >
          {props.options.map((option: any, index: number) => {
            return (
              <Text
                key={index}
                size="sm"
                style={{
                  cursor: "pointer",
                  padding: 4,
                }}
                onClick={() => {
                  option.onClick(props.item);
                  setOpen(false);
                }}
              >
                {option.label}
              </Text>
            );
          })}
        </Paper>
      ) : null}
    </div>
  );
};
