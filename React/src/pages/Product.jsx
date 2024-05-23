import { useEffect, useState } from "react";
import Users from "./Users";

const Product = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/products/search?q=phone")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>products</h1>
      {data.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
      <Users />
    </div>
  );
};

export default Product;
