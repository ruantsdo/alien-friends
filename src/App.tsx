// React
import { useState, useMemo, useEffect } from "react";
//Styles
import "./App.css";
//Components
import { SearchField, CardList } from "./components";
//Types
import { AlienData } from "./types";

function App() {
  const [searchValue, onSearchValueChange] = useState<string>("");
  const [isGettingData, setIsGettingData] = useState<boolean>(true);
  const [aliensData, setAliensData] = useState<AlienData[]>([]);
  const [screenMessage, setScreenMessage] = useState<string>(
    "Obtendo informação extra-planetares ..."
  );

  const getAliensData = async () => {
    setIsGettingData(true);
    setScreenMessage("Obtendo informação extra-planetares ...");

    try {
      const response = await fetch(
        "https://randomuser.me/api/?inc=name,email,login&results=10&noinfo"
      );
      const data = await response.json();
      setAliensData(data.results);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      setScreenMessage("Falha ao recuperar os dados dos Aliens ... :(");
    } finally {
      setIsGettingData(false);
    }
  };

  const filteredAliens = useMemo(() => {
    const searchTerms = searchValue
      .toLowerCase()
      .split(" ")
      .filter((term) => term);

    if (isGettingData || !aliensData.length) {
      return [];
    }

    return aliensData.filter((alien) => {
      const searchableFields = [
        alien.name.first.toLowerCase(),
        alien.name.title.toLowerCase(),
        alien.email.toLowerCase(),
      ];

      return searchTerms.every((term) =>
        searchableFields.some((field) => field.includes(term))
      );
    });
  }, [searchValue, isGettingData, aliensData]);

  useEffect(() => {
    getAliensData();
  }, []);

  return (
    <div className="app-container">
  <div className="stars"></div>
  <div className="twinkling"></div>
  <div className="clouds"></div>

  <main className="main-content">
    <h1 id="title">AlienFriends</h1>
    <SearchField
      searchValue={searchValue}
      onSearchValueChange={onSearchValueChange}
    />
    {isGettingData ? (
      <p>{screenMessage}</p>
    ) : (
      <CardList filteredAliens={filteredAliens} />
    )}
  </main>
</div>
  );
}

export default App;
