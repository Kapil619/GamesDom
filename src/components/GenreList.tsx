import useGenres from "../hooks/useGenres";

export const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name} </li>
      ))}
    </ul>
  );
};
