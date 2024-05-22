import { useState } from "react";
import {
  Button,
  Collapse,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import Gametrailer from "../components/Gametrailer";
import useGame from "../hooks/useGame";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading> {game.name} </Heading>
        <Collapse startingHeight={70} in={show}>
          {game.description_raw}
        </Collapse>
        <Button size="sm" onClick={handleToggle} mt="1rem">
          Show {show ? "Less" : "More"}
        </Button>
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
