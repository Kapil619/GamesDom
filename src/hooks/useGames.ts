import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Platform {
    id:number;
    name:string;
    slug:string;
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform} [],
    metacritic: number
}
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }
const useGames = () =>{
    const [games, setgames] = useState<Game[]>([]);
    const [error, seterror] = useState("");
    const [isLoading, setisLoading] = useState(false)
    useEffect(() => {

        const controller = new AbortController();
        setisLoading(true)
      apiClient
        .get<FetchGamesResponse>("/games", {signal: controller.signal})
        .then((res) => {setgames(res.data.results)
        setisLoading(false)})
        .catch((err) => {
            if (err instanceof CanceledError) return;
            seterror(err.message)
          setisLoading(false);});

    return () => controller.abort()
    }, []);
    return {games, error, isLoading};
}

export default useGames;