import { createContext, useState, useEffect } from "react";

export const userContext = createContext(null);

const UserConsumer = ({ children }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser({ name: "Devendra Khatri", email: "devendrakhatri@gmail.com" });
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserConsumer;
