import React, { useState } from "react";
import "animate.css";
const CreateTodoButton = () => {
  const [state, setState] = useState(0);
  return (
    <>
      <p>{state}</p>
      <button
        onClick={() => {
          setState(state + 1);
        }}
        className="animate__animated animate__bounce animate__faster"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V9H7C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H11V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V11H17C17.5523 11 18 10.5523 18 10C18 9.44772 17.5523 9 17 9H13V6Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </>
  );
};

export { CreateTodoButton };