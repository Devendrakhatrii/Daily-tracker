import { useState } from "react";
import { Admin, User } from "./Acess";

const Contact = () => {
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState(false);

  return (
    <>
      <input id="name" type="text" placeholder="Enter your first name." />
      <button
        onClick={() => {
          setName(document.querySelector("#name").value);
          setSubmit(true);
        }}
      >
        Submit
      </button>
      {submit && name.toLowerCase() === "snigdha" ? (
        <Admin />
      ) : submit ? (
        <User />
      ) : null}
    </>
  );
};

export default Contact;
