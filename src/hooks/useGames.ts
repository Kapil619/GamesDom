
import { useQuery } from 'react-query';
import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import { FetchResponse } from '../services/api-client';
import { Platform } from './usePlatforms';


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[],
    metacritic: number
}

const useGames = (GameQuery: GameQuery) =>

    useQuery<FetchResponse<Game>,Error>({
        queryKey: ['games', GameQuery],
    queryFn: () => apiClient.get < FetchResponse<Game>>('/games', {
        params: {
            genres: GameQuery.genre?.id, parent_platforms: GameQuery.platform?.id,
            ordering: GameQuery.sortOrder, search: GameQuery.searchText
        }
        }).then(res => res.data)
    });

export default useGames;