import { useContext } from "react";
import { userContext } from "../contextapi/index";
import Profile from "../pages/Profile";

const CompC = () => {
  const user = useContext(userContext);

  return (
    <>
      {JSON.stringify(user)}
      <Profile />
    </>
  );
};

export default CompC;
