import "./App.scss";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Main } from "./pages/Main";
import { FilmDetail } from "./pages/FilmDetail";

export const AppContext = React.createContext("");

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [prevSearchValue, setPrevSearchValue] = useState("");
  const [films, setFilms] = useState({});

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          searchValue,
          setSearchValue,
          films,
          setFilms,
          prevSearchValue,
          setPrevSearchValue,
        }}
      >
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/details/:id" element={<FilmDetail />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
