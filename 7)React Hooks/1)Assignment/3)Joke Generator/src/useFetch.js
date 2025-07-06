import { useState, useEffect } from "react";

// Custom hook for fetching jokes
const useFetch = (url) => {
  const [data, setData] = useState("");       // joke data
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null);     // error state

  const getJoke = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Failed to fetch joke");
      }
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    getJoke();
  }, [url]);

  return { data, loading, error, getJoke};
};

export default useFetch;
