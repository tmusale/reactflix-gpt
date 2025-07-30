import { faInfoCircle, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="pt-[20%] px-12 absolute text-white w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/4">{overview}</p>
      <div className="flex gap-3">
        <button className="bg-white p-4 px-12 text-xl text-black font-bold rounded-lg hover:bg-opacity-80">
          <FontAwesomeIcon icon={faPlay} /> Play
        </button>
        <button className="bg-gray-500 p-4 px-12 text-xl text-white rounded-lg hover:bg-opacity-80">
          <FontAwesomeIcon icon={faInfoCircle} /> More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
