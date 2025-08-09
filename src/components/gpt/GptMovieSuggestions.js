import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../secondaryContainer/MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gpt;

  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-white rounded-lg opacity-90 h-screen overflow-auto">
      <div className="">
        {movieResults?.map((res, index) => (
          <MovieList
            key={movieNames[index]}
            title={movieNames[index]}
            movies={res}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
