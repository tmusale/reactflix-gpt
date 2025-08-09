import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import openaiClient from "../utils/openai";

export const useGptSearchMovies = () => {
  const dispatch = useDispatch();
  const searchMovieTMDB = async (movie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`,
      API_OPTIONS
    );
    const data = await response.json();

    return data.results;
  };

  const handleGPTSearchClick = async (searchText) => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Robot, Animal, Coolie, Don, Golmaal";

    const gptResults = await openaiClient.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }],
    });

    if (!gptResults.choices) {
      // Error handling
    }

    const gptMovies = gptResults?.choices[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbMovieResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({
        movieNames: gptMovies,
        movieResults: tmdbMovieResults,
      })
    );
  };

  return [handleGPTSearchClick];
};
