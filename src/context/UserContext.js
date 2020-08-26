import React, { useState } from "react";

export const UserContext = React.createContext(null);

export const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
