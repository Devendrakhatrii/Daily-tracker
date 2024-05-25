import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const controller = new AbortController();
      const signal = controller.signal;
      try {
        setLoading(true);
        const { data } = await axios(url, signal);
        console.log(data);
        setData(data);
        return controller.abort();
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
