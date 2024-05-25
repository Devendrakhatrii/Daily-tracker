import { useEffect, useState } from "react";

const useDebounce = (search, dealy = 1000) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(search);
    }, dealy);
    return () => clearTimeout(timer);
  }, [search, dealy]);

  return query;
};

export default useDebounce;
