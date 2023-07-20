import React, { useContext } from "react";
import { MyContext } from "../../contexts/MyContex";
const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(MyContext);
  return (
    <>
      <p>{searchValue}</p>
      <input
        placeholder="cortar cebolla"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </>
  );
};

export { TodoSearch };
