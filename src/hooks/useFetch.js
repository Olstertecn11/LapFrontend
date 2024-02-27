import { useState, useEffect } from 'react';

export const useFetch = (myService) => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await myService();
        if (response.ok) throw Error(response.statusText);
        setIsPending(false)
        setData(response);
        setError(null);
      }
      catch (error) {
        setError(error);
        setIsPending(false);
      }
    }
    fetchData();

  }, []);
  return { data, isPending, error }
}
