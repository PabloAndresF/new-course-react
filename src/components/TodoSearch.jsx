import React, { useState } from "react";
const TodoSearch = () => {
  const [searchValue, setSearchValue] = useState("");

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
