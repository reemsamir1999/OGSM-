import { List } from "./list";

export const addItemToBoard = (id, setBoard) => {
  const ItemsList = List.filter((item) => id === item.id);
  setBoard((board) => [...board, ItemsList[0]]);
};
