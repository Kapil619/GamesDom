import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import Gametrailer from "../components/Gametrailer";
import useGame from "../hooks/useGame";
import GameScreenshots from "../components/GameScreenshots";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      <GridItem>
        <Heading> {game.name} </Heading>
        <ExpandableText> {game.description_raw} </ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <Gametrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};
