import React, { Children, createContext, useEffect, useState } from "react";

const userContext = createContext(null);

const UserConsumer = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser({
      name: "Devendra khatri",
      email: "devendrakhatri@gmail.com",
    });
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserConsumer;
