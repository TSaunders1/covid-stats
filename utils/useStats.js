import { useEffect, useState } from 'react';

const useStats = (url) => {
  const [statistics, setStatistics] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await fetch(url)
        .then((res) => res.json())
        .catch((err) => setError(err));
      setStatistics(data);
      setLoading(false);
    }
    fetchData();
  }, [url]);
  return {
    statistics,
    loading,
    error,
  };
};

export default useStats;
