import { atom } from "jotai";
import type { Item } from "~/types";
import { ViewTab } from "~/utils/enums";

export const viewTabAtom = atom(ViewTab.Grid);
export const folderItems = atom<Item[]>([]);
