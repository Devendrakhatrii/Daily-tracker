import React, { useEffect, useState } from "react";
import axios from "axios";

const Useeffect = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://dummyjson.com/posts");
        console.log(data);
        console.log(data.posts);
        setPosts(data.posts);
        return data;
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return <div>Useeffect</div>;
};

export default Useeffect;
