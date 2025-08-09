import React, { useRef } from "react";
import { useSelector } from "react-redux";
import lang from "../../utils/languageConstants";
import { useGptSearchMovies } from "../../hooks/useGptSearchMovies";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const [handleGPTSearchClick] = useGptSearchMovies();

  return (
    <div className="pt-[55%] md:pt-[15%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9 rounded-lg"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 text-white bg-red-700 m-4 px-4 py-2 rounded-lg"
          onClick={() => handleGPTSearchClick(searchText)}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
