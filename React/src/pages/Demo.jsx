import React, { useEffect, useState } from "react";

import axios from "axios";

const Demo = () => {
  const [search, setSearch] = useState("");
  const [detail, setDetail] = useState([]);
  const [ingrediants, setIngredinats] = useState(false);
  const [instructions, setInstruction] = useState(false);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/recipes?limit=1&skip=10&select=name,image"
        );
        console.log(data);
        setDetail(data);
      } catch (error) {
        console.error(error);
      }
    };
    getDetails();
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
          <input type="checkbox" id="horns" name="horns" />
          <label>ingrediants</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="horns"
            name="horns"
            onChange={() => {
              url + "instructions";
            }}
          />
          <label>instructions</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="horns"
            name="horns"
            onChange={() => {
              url + "ingrediants";
            }}
          />
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
        <h1>{detail.name}</h1>
      </div>
    </>
  );
};

export default Demo;
