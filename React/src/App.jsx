import { useState } from "react";
import useFetch from "./hooks/useFetch";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [search, setSearch] = useState("");
  const query = useDebounce(search, 500);
  const { data, error, loading } = useFetch(
    `https://dummyjson.com/products/search?q=${query}`
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong!</h1>;

  return (
    <>
      <input
        type="text"
        placeholder="search product"
        onChange={(e) => setSearch(e.target.value)}
      />
      {data ? (
        data.products.map((item) => {
          return <h1 key={item?.id}>{item?.title}</h1>;
        })
      ) : (
        <h1>Data not found!</h1>
      )}
    </>
  );
}

export default App;
