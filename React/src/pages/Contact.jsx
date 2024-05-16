import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const message = (name) => {
    name.toLowerCase() === "singdha" ? <Admin /> : <User />;
  };
  return (
    <>
      <input id="name" type="text" placeholder="Enter your first name." />
      <button
        onClick={() => {
          message(document.querySelector("#name").value);
        }}
      >
        Submit
      </button>
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
