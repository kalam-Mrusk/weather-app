import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
function SearchBox({ handleSearch, setSearchCity }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search Loaction"
        onChange={(e) => setSearchCity(e.target.value)}
      />
      <button onClick={(e) => handleSearch(e)}>
        <SearchOutlinedIcon />
      </button>
    </div>
  );
}

export default SearchBox;
