import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { motion } from "framer-motion";

function FilterButtons({ filterData, flag }) {
  const [filterName, setFilterName] = useState(null);
  const [filterMenu, setFilterMenu] = useState(false);
  return (
    <div className="border border-gray-300 rounded-md px-4 py-1 relative cursor-pointer hover:hover-gray-700">
      <p className="text-base tracking-wide text-textColor flex items-center gap-2 "
      onClick={() => setFilterMenu(!filterMenu)}
      >
        {!filterName && flag}

        <IoChevronDown
          className={
            "text-base text-textColor duration-150 transition-all ease-in-out"
          }
        />
      </p>
      {filterData && filterMenu && (
        <motion.div className="w-48 z-50 backdrop-blur-sm max-h-44 overflow-y-scroll scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400 py-2 flex flex-col rounded-md shadow-md absolute top-8 left-1 ">hi</motion.div>
      )}
    </div>
  );
}

export default FilterButtons;
