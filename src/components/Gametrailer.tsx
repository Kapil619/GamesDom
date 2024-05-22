import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const Gametrailer = ({ gameId }: Props) => {
  const { data, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  const first = data?.results[0];
  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default Gametrailer;
