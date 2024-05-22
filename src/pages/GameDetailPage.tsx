import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import Gametrailer from "../components/Gametrailer";
import useGame from "../hooks/useGame";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading> {game.name} </Heading>
        <Text> {game.description_raw} </Text>
        {/* Need to use Expandable text here */}
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <Gametrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};
