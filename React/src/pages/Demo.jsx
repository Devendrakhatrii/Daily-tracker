import React, { useEffect, useState } from "react";

import axios from "axios";

const Demo = () => {
  const [query, setQuery] = useState("phone");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const func = async () => {
      try {
        const { data } = await axios(
          `https://dummyjson.com/products/search?q=${query}`
        );
        // console.log(data);
        setProducts(data?.products || []);
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }),
    [];
  return (
    <>
      <input
        type="text"
        name=""
        placeholder="Enter product:"
        id=""
        onChange={(e) => setQuery(e.target.value)}
      />
      {products.map((item) => {
        <ol key={item.id}>
          <li>{item.title}</li>;
        </ol>;
      })}
    </>
  );
};

export default Demo;
