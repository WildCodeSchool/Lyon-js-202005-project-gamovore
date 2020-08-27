import React, { useState } from "react";
import { UserContext } from "./UserContext";

export const FilterContext = React.createContext(null);

export const FilterProvider = (props) => {
  const [selectedFilters, setFilters] = useState({});
  return (
    <FilterContext.Provider value={{ selectedFilters, setFilters }}>
      {props.children}
    </FilterContext.Provider>
  );
};
