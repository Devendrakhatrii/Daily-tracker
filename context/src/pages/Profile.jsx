import { userContext } from "../contextapi/index";

const Profile = () => {
  return (
    <userContext.Consumer>
      {(user) => {
        return <h1>welcome {JSON.stringify(user)}</h1>;
      }}
    </userContext.Consumer>
  );
};

export default Profile;
