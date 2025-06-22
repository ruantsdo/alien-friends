import { useState, useMemo } from "react";
import "./App.css";
import { SearchField, CardList } from "./components";
import { AliensData } from "./data/aliensData";

function App() {
  const [searchValue, onSearchValueChange] = useState<string>("");

  const filteredAliens = useMemo(() => {
    const lowercasedSearch = searchValue.toLowerCase();

    return AliensData.filter(
      (alien) =>
        alien.userName.toLowerCase().includes(lowercasedSearch) ||
        alien.email.toLowerCase().includes(lowercasedSearch)
    );
  }, [searchValue]);

  return (
    <div className="tc">
      <h1 id="title">AlienFriends</h1>
      <SearchField
        searchValue={searchValue}
        onSearchValueChange={onSearchValueChange}
      />
      <CardList filteredAliens={filteredAliens} />
    </div>
  );
}

export default App;
