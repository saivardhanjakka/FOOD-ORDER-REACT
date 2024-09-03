import { useState, useCallback } from 'react';

// Function to send HTTP requests
async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || 'Something went wrong, failed to send request.');
  }

  return resData;
}

// Custom hook for HTTP requests
export default function useHttp(url, config = {}, initialData = null) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to clear data
  const clearData = () => {
    setData(initialData);
  };

  // Function to send a request
  const sendRequest = useCallback(
    async (body = null) => {
      setIsLoading(true);
      try {
        const resData = await sendHttpRequest(url, { ...config, body });
        setData(resData);
      } catch (error) {
        setError(error.message || 'Something went wrong!');
      }
      setIsLoading(false);
    },
    [url, config]
  );

  // Effect to fetch data on initial load if method is GET
  useEffect(() => {
    if (config.method === 'GET' || !config.method) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData,
  };
}
