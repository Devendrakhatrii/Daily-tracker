import React, { useEffect, useState } from "react";

import axios from "axios";

const Demo = () => {
  const [search, setSearch] = useState("");
  const [receipe, setReceipe] = useState([]);
  const [url, setUrl] = useState(
    "https://dummyjson.com/recipes?limit=10&skip=10&select=name,image"
  );

  useEffect(() => {
    const func = async () => {
      try {
        const { data } = await axios(url);
        console.log(data);
        setReceipe(data);
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }),
    [];

  const changeUrl = () => {};

  //serving name instructions ingrediants image

  return (
    <>
      <fieldset>
        <legend>Receipe:</legend>

        <div>
          <input type="checkbox" id="scales" name="scales" checked disabled />
          <label>name</label>
        </div>

        <div>
          <input type="checkbox" id="horns" name="horns" checked disabled />
          <label>image</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="horns"
            name="horns"
            onChange={() => {
              url + "";
            }}
          />
          <label>ingrediants</label>
        </div>
        <div>
          <input type="checkbox" id="horns" name="horns" />
          <label>instructions</label>
        </div>
        <div>
          <input type="checkbox" id="horns" name="horns" />
          <label>servings</label>
        </div>
        <input
          type="text"
          name=""
          placeholder="Search Receipe:"
          id=""
          onChange={(e) => setSearch(e.target.value)}
        />
      </fieldset>
      <div>
        {receipe.map((item) => {
          return <h1>{item.name}</h1>;
        })}
      </div>
    </>
  );
};

export default Demo;
