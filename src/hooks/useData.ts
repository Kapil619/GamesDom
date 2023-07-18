import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";



interface FetchResponse <T>{
  count: number;
  results: T[];
}


const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setdata] = useState<T[]>([]);
  const [error, seterror] = useState("");
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setisLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((res) => {
        setdata(res.data.results);
        setisLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        seterror(err.message);
        setisLoading(false);
      });

    return () => controller.abort();
  }, deps?  [...deps]: []);
  return { data, error, isLoading };
};

export default useData;
