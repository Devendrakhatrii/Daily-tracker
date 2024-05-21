import React, { useEffect, useState } from "react";
import axios from "axios";

const Useeffect = () => {
  co;
  const data = useFetch("https://dummyjson.com/products/search?q=phone");

  return (
    <>
      <table key={index} border={2}>
        <thead>
          {data.length > 0 &&
            data.map((item, index) => {
              return (
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Body</th>
                </tr>
              );
            })}
        </thead>

        <tbody>
          {data.map((item, index) => {
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
    </>
  );
};

export default Useeffect;
