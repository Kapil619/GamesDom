import { useQuery } from "react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

export interface Platform{
    id:number,
    name:string,
    slug: string
}

const usePlatforms = ()=> useQuery({
    queryKey: ['platforms'],
    queryFn: ()=> apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then((res)=> res.data),
});

export default usePlatforms;