import { useQuery } from "react-query";
import genres from "../data/genres";
import Genre from "../entities/Genre";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres, next: null }, //expected error but didnt modified the code
  });

export default useGenres;
