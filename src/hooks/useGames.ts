import { useQuery } from 'react-query';
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from './usePlatforms';


const apiClient = new APIClient<Game>('/games');

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[],
    metacritic: number
}

const useGames = (GameQuery: GameQuery) =>

    useQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', GameQuery],
        queryFn: () => apiClient.getAll({
            params: {
                genres: GameQuery.genre?.id, parent_platforms: GameQuery.platform?.id,
                ordering: GameQuery.sortOrder, search: GameQuery.searchText
            },
        }),
    });

export default useGames;