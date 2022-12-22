import React, { useEffect, useRef, useState } from "react";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { motion } from "framer-motion";

import { BiCloudUpload } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

import { storage } from "../config/firebase.config";
import { useStateValue } from "../Context/StateProvider";
import FilterButtons from "./FilterButtons";
import {
  getAllAlbums,
  getAllArtist,
  getAllSongs,
  saveNewAlbum,
  saveNewArtist,
  saveNewSong,
} from "../api";
import { actionType } from "../Context/reducer";
import { filterByLanguage, filters } from "../utils/supportFunctions";
import { IoMusicalNote } from "react-icons/io5";
import AlertSuccess from "./AlertSuccess";
import AlertError from "./AlertError";

function DashboardNewSong() {
  const [songName, setsongName] = useState("");
  const [{ allArtists, allAlbums }, dispatch] = useStateValue();

  useEffect(() => {
    if (!allArtists) {
      getAllArtist().then((data) => {
        dispatch({
          type: actionType.SET_ARTISTS,
          allArtists: data.artists,
        });
      });
    }
    if (!allAlbums) {
      getAllAlbums().then((data) => {
        dispatch({
          type : actionType.SET_ALL_ALBUMS,
          allAlbums : data.allAlbums
        })
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md gap-4">
      <input
        type="text"
        placeholder="type song name..."
        className="w-full p-3 rounded-md text-base font-semibold text-textColor outline-none shadow-sm border borger-gray-300 bg-transparent"
        value={songName}
        onChange={(e) => setsongName(e.target.value)}
      />
      <div className="flex w-full justify-between flex-wrap items-center gap-4">
        <FilterButtons filterData={allArtists} flag={"Artist"} />
        <FilterButtons filterData={allAlbums} flag={"Albums"}></FilterButtons>
        <FilterButtons filterData={""} flag={"Languages"}></FilterButtons>
        <FilterButtons filterData={""} flag={"Category"}></FilterButtons>
      </div>
    </div>
  );
}

export default DashboardNewSong;
