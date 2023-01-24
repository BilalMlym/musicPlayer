import React, { useState, useEffect } from "react";
import { useStateValue } from "../Context/StateProvider";

const MusicPlayer = () => {
  const [{ allSongs, song, isPlaying, miniPlayer }, dispatch] = useStateValue();
  return (
    <div className="w-full flex items-center gap-3 overflow-hidden">
      <div className="w-full items-center gap-3 p-4 flex relative">
        <img
          src={allSongs[song]?.imageURL}
          alt=""
          className="w-40 h-20 object-cover rounded-md"
        />
        <div className="flex items-start flex-col">
          <p className="text-xl text-headingColor font-semibold">
            {`${
              allSongs[song]?.name.length > 20
                ? allSongs[song]?.name.slice(0, 20)
                : allSongs[song]?.name
            }`}{" "}
            <span className="text-base">({allSongs[song]?.album})</span>
          </p>
          <p className="text-textColor">
            {allSongs[song]?.artist}{" "}
            <span className="text-sm text-textColor font-semibold">
              ({allSongs[song]?.category})
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
