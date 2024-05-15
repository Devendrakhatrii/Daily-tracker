import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const message = (name) => {
    alert(`thank you ${name}`);
  };
  return (
    <>
      <input id="name" type="text" placeholder="Enter your first name." />
      {name === "raktim"}
      Submit
    </>
  );
};

const Admin = () => {
  return <>welcome admin</>;
};

const User = () => {
  return <>welcome user</>;
};

export default Contact;
