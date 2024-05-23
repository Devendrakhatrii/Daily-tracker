import axios from "axios";

const getData = async () => {
  try {
    const { data } = await axios.get("https://dummyjson.com/posts");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
};

getData();
