import React, { useEffect, useState } from "react";
import axios from "axios";

const Useeffect = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios("https://dummyjson.com/posts");
        console.log(data);
        console.log(data.posts);
        setDatas(data.posts);
        return data;
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const { id, title, body } = datas;
  return (
    <>
      {datas.length > 0 && (
        <table border={2}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Useeffect;
