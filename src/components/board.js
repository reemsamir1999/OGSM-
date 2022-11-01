import React from "react";
import AddIcon from "../assets/icons/add-icon";
import Item from "./item";

const Board = ({ board, drop }) => {
  return (
    <div
      className="border-2 border-gray-400  min-h-[8rem] bg-white w-full"
      ref={drop}
    >
      <div className="bg-white p-4 flex items-center justify-between ">
        <span></span>
        <span className="font-bold text-lg">Ambitie</span>
        <AddIcon />
      </div>
      {board.length > 0 ? (
        board.map((div) => {
          return <Item text={div.text} id={div.id} />;
        })
      ) : (
        <p className="text-center text-xl text-gray-300 font-bold">
          Nog geen items
        </p>
      )}
    </div>
  );
};

export default Board;
