import React, { useState } from "react";

const Demo = () => {
  const [user, setUser] = useState();
  return (
    <div>
      <h1>Name:{name}</h1>
      <input
        type="text"
        id="name"
        onChange={(e) => setContainer(e.target.value)}
      />
      <button onClick={() => setName(container)}>Change</button>
    </div>
  );
};

export default Demo;
