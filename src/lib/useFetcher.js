import {useEffect, useState} from "react";
import axios from "axios";

export default function useFetcher({endpoint}) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  const apiConfig = {
    baseUrl: process.env.STRAPI_BASE_URL,
    token: process.env.STRAPI_API_TOKEN,
  };

  const fetcher = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(apiConfig.baseUrl + endpoint, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiConfig.token}`,
        },
      });
      setData(res.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetcher();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
}
