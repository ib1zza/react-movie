import React, { FC, useState } from "react";
import s from "./SearchBar.module.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  placeholder?: string;
}
const SearchBar: FC<Props> = ({ placeholder }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div className={s.searchBarContainer}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={s.icon} />
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
