import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import DefinitionItem from "../components/DefinitionItem";
import { CriticScore } from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading> {game.name} </Heading>
      <ExpandableText> {game.description_raw} </ExpandableText>
      <GameAttributes game={game} />
    </>
  );
};
