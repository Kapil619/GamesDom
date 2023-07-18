import useGenres from "../hooks/useGenres";

export const GenreList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name} </li>
      ))}
    </ul>
  );
};
