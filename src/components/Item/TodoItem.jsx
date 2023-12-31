import React from "react";
import { CompleteIcon } from "../../iconsJs/CompleteIcon";
import { DeleteIcon } from "../../iconsJs/DeleteIcon";

const TodoItem = (props) => {
  return (
    <div className="items">
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      {/* <span onClick={props.onComplete}> */}
      {/* {props.completed ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.7679 5.71447C17.4779 4.86832 18.7394 4.75795 19.5856 5.46796C20.4317 6.17796 20.5421 7.43947 19.8321 8.28562L10.833 19.0102C10.123 19.8564 8.86153 19.9668 8.01538 19.2568C7.16923 18.5468 7.05886 17.2852 7.76886 16.4391L16.7679 5.71447Z"
              fill="red"
            />
            <path
              d="M3 12.7396C3 11.6351 3.89543 10.7396 5 10.7396C6.10457 10.7396 7 11.6351 7 12.7396C7 13.8442 6.10457 14.7396 5 14.7396C3.89543 14.7396 3 13.8442 3 12.7396Z"
              fill="blue"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.7679 5.71447C17.4779 4.86832 18.7394 4.75795 19.5856 5.46796C20.4317 6.17796 20.5421 7.43947 19.8321 8.28562L10.833 19.0102C10.123 19.8564 8.86153 19.9668 8.01538 19.2568C7.16923 18.5468 7.05886 17.2852 7.76886 16.4391L16.7679 5.71447Z"
              fill="currentColor"
            />
            <path
              d="M3 12.7396C3 11.6351 3.89543 10.7396 5 10.7396C6.10457 10.7396 7 11.6351 7 12.7396C7 13.8442 6.10457 14.7396 5 14.7396C3.89543 14.7396 3 13.8442 3 12.7396Z"
              fill="currentColor"
            />
          </svg>
        )} */}
      {/* </span> */}
      <p className={` ${props.completed && "through"}`}>{props.text}</p>
      <DeleteIcon onDelete={props.onDelete} />
      {/* <span onClick={props.onDelete}> */}
      {/* <svg
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
        </svg> */}
      {/* </span> */}
    </div>
  );
};

export { TodoItem };
