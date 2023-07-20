import React from "react";
import { ReactComponent as CheckSVG } from "../svg/check.svg";
import { ReactComponent as DeleteSVG } from "../svg/delete.svg";

const TodoIcon = ({ type, color, onClick }) => {
  const iconTypes = {
    check: (color) => <CheckSVG fill={color} />,
    delete: (color) => <DeleteSVG fill={color} />,
  };
  return <span onClick={onClick}>{iconTypes[type](color)}</span>;
};

export default TodoIcon;
