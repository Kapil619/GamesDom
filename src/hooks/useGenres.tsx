import { useQuery } from "react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres, next: null }, //expected error but didnt modified the code
  });

export default useGenres;
