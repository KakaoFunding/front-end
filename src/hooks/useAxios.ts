import axios, { AxiosError, AxiosRequestConfig, Method } from 'axios';
import { useState } from 'react';

type RequestConfig = AxiosRequestConfig & {
  method: Method;
  url: string;
};

/**
 * API Request hook using axios
 * @param config request config object contains method, url, params
 * @returns received data, error, loading state, request function
 */
export const useAxios = <T>(config: RequestConfig) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError<T> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendRequest = async () => {
    setIsLoading(true);
    try {
      const res = await axios.request<T>(config);
      setData(res.data as T);
    } catch (err) {
      setError(err as AxiosError<T>);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, sendRequest };
};
