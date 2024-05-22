import { useQuery } from "react-query";
import APIClient from "../services/api-client";
import { Trailer } from "../entities/Trailer";


const useTrailers = (gameId: number) => {
    const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
    return useQuery({
        queryKey: ["trailers", gameId],
        queryFn: apiClient.getAll,
    })
}

export default useTrailers; 