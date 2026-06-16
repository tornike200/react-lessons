import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      setError("");

      try {
        const response = await fetch(url);

        if (!response.ok) throw new Error("Can't fetch data !!!");

        setData(await response.json());
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }

    getData();
  }, [url]);

  return { data, isLoading, error };
}
