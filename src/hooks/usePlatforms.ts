import { useQuery } from "react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
    id: number,
    name: string,
    slug: string
}

const usePlatforms = () => useQuery<FetchResponse<Platform>>({
    queryKey: ['platforms'],
    queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms
});

export default usePlatforms;