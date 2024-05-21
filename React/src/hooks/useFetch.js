import React, { useEffect, useState } from "react";
import axios from "axios";

const usefetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(url);
        setDetail(data);
      } catch (error) {
        console.error(error);
      }
    })();
  });
  return data;
};

export default usefetch;
