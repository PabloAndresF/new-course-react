import React from "react";
import { ReactComponent as CheckSVG } from "./components/check.svg";
import { ReactComponent as DeleteSVG } from "./components/delete.svg";

const TodoIcon = ({ type, color, onClick }) => {
  const iconTypes = {
    check: (color) => <CheckSVG fill={color} />,
    delete: (color) => <DeleteSVG fill={color} />,
  };
  return <span onClick={onClick}>{iconTypes[type](color)}</span>;
};

export default TodoIcon;
