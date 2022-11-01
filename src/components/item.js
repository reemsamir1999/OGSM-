import React from "react";
import { useDrag } from "react-dnd";

function Item({ id, text }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "div",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      className={` rounded-md p-2 text-sm mx-2 my-2 ${
        isDragging ? "bg-blue-200 ring-1 " : "bg-gray-100"
      } `}
    >
      {text}
    </div>
  );
}

export default Item;
