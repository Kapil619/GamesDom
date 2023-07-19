import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  GameQuery: GameQuery;
}
export const GameHeading = ({ GameQuery }: Props) => {
  const heading = `${GameQuery.platform?.name || ""} ${
    GameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading marginY={5} fontSize={"5xl"} as={"h1"}>
      {heading}
    </Heading>
  );
};
