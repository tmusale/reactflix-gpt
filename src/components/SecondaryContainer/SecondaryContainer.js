import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      {/***
       * MovieList - Popular
       * MovieList - Now Playing
       * MovieList - Trending
       * MovieList - Horror
       */}
      <div className="mt-0 md:-mt-48 relative z-20">
        <MovieList
          title="Now Playing Movies"
          movies={movies.nowPlayingMovies}
        />
        <MovieList title="Top Rated" movies={movies.topRatedMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Upcoming" movies={movies.upcomingMovies} />
      </div>
    </div>
  );
}

export default SecondaryContainer;
