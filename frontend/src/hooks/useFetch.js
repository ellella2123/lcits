import { useState } from "react";

export default function useFetch(apiCall) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (...args) => {
    setLoading(true);
    try {
      const res = await apiCall(...args);
      setData(res);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return { data, loading, fetchData };
}