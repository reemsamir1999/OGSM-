import React from "react";
import { useDrop } from "react-dnd";
import { addItemToBoard } from "./add-item-to-board";
import Board from "./board";

import Item from "./item";
import { List } from "./list";

const MainScreen = () => {
  const [board, setBoard] = React.useState([]);
  const [board1, setBoard1] = React.useState([]);
  const [board2, setBoard2] = React.useState([]);
  const [board3, setBoard3] = React.useState([]);
  const [board4, setBoard4] = React.useState([]);

  const [, drop] = useDrop(() => ({
    accept: "div",
    drop: (item) => addItemToBoard(item.id, setBoard),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [, drop1] = useDrop(() => ({
    accept: "div",
    drop: (item) => addItemToBoard(item.id, setBoard1),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [, drop2] = useDrop(() => ({
    accept: "div",
    drop: (item) => addItemToBoard(item.id, setBoard2),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [, drop3] = useDrop(() => ({
    accept: "div",
    drop: (item) => addItemToBoard(item.id, setBoard3),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [, drop4] = useDrop(() => ({
    accept: "div",
    drop: (item) => addItemToBoard(item.id, setBoard4),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <>
      <div className="p-20">
        <div className="flex items-center mb-6">
          {List.map((div) => {
            return <Item text={div.text} id={div.id} />;
          })}
        </div>
        <Board board={board} drop={drop} />
        <div className="flex items-center mt-4">
          <div className="mr-4 w-full">
            <Board board={board1} drop={drop1} />
          </div>
          <Board board={board2} drop={drop2} />
          <Board board={board3} drop={drop3} />
          <Board board={board4} drop={drop4} />
        </div>
      </div>
    </>
  );
};

export default MainScreen;
