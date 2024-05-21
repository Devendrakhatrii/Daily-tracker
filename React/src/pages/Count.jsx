import React, { useEffect, useState } from "react";
import moment from "moment";

const Count = () => {
  const [count, setCount] = useState(7889400000);
  moment();
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count - 1000);
    }, 1000);
    return () => clearTimeout(timer);
  });
  return <>count:{count}</>;
};

export default Count;
