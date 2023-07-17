import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}
export const GameGrid = () => {
  const [games, setgames] = useState<Game[]>([]);
  const [error, seterror] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setgames(res.data.results))
      .catch((err) => seterror(err.message));
  }, []);

  return (
    <>
      {error && <Text> {error} </Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}> {game.name}</li>
        ))}
      </ul>
    </>
  );
};
