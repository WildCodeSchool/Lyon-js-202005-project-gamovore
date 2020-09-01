import React, { useState } from "react";

export const FilterContext = React.createContext();

export const FilterProvider = (props) => {
  const [selectedFilters, setFilters] = useState([]);
  return (
    <FilterContext.Provider value={{ selectedFilters, setFilters }}>
      {props.children}
    </FilterContext.Provider>
  );
};
