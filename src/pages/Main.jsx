import React, { useEffect, useState, useCallback } from "react";
import { debounce } from "lodash";
import { CardFilm } from "../components/CardFilm";
import { HeaderSearch } from "../components/HeaderSearch";

import { query } from "../services/query";
import { templateUrls } from "../services/urls";
import { AppContext } from "../App";

export const Main = () => {
  const [isLoading, setLoading] = useState(false);

  const { films, setFilms, searchValue, prevSearchValue, setPrevSearchValue } =
    React.useContext(AppContext);
  const pageCount = films.total_pages;
  console.log(films);
  console.log(pageCount);
  const debounceFn = useCallback(debounce(debounceHandler, 800), []);

  function debounceHandler(value) {
    setLoading(true);
    if (value.trim() !== "") {
      query(templateUrls.urlFromName + value.trim()).then((data) => {
        setFilms(data);
        setLoading(false);
      });
    } else {
      defaultQuery();
    }
  }

  function defaultQuery() {
    query(templateUrls.default).then((data) => {
      setFilms(data);
      setLoading(false);
    });
  }

  useEffect(() => {
    if (searchValue !== prevSearchValue) {
      setPrevSearchValue(searchValue);
      debounceFn(searchValue);
    }
  }, [searchValue]);

  useEffect(() => {
    if (searchValue === "" && !films.results) {
      defaultQuery();
    }
  }, []);

  return (
    <div className="container">
      <HeaderSearch />
      <div className="films-wraper">
        {films.results && films.results.length > 0
          ? films.results.map((data) => <CardFilm key={data.id} data={data} />)
          : "Ничего не найдено"}
      </div>
    </div>
  );
};
