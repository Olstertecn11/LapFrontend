
import { useState, useEffect } from 'react';

const useFetch = (myService, params) => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await myService();
        setData(response);
        setIsPending(false);
        setError(null);
      } catch (error) {
        setError(error);
        setIsPending(false);
      }
    };

    fetchData();

  }, []);

  const updateData = async () => {
    try {
      setIsPending(true);
      const response = await myService();
      const responseData = await response;
      setData(responseData);
      setIsPending(false);
      setError(null);
    } catch (error) {
      setError(error);
      setIsPending(false);
    }
  };

  return { data, isPending, error, updateData };
};

export default useFetch;

