import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/SearchContext";

export function Search() {
  const { search, setSearch } = useContext(SearchContext);
  const [localSearch, setLocalSearch] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(localSearch);
    }, 250);
    return () => clearTimeout(timer);
  }, [localSearch]);

  function handleSearch(value: string) {
    setLocalSearch(value);
  }

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search cards..."
        value={localSearch}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );

}
