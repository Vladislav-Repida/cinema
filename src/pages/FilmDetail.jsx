import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { query } from "../services/query";

import { HeaderFilm } from "../components/HeaderFilm";
import { BodyFilm } from "../components/BodyFilm";

export const FilmDetail = () => {
  const { id } = useParams();

  const [detailsFilm, setDetailsFilm] = useState(0);

  useEffect(() => {
    query(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6dc9ee6d9fbd3622bc5079beda3d30e8`
    ).then((data) => setDetailsFilm(data));
  }, [id]);

  return (
    <div>
      {detailsFilm ? (
        <>
          <HeaderFilm imgPath={detailsFilm.backdrop_path} />
          <BodyFilm
            dataFilm={{
              title: detailsFilm.title,
              desc: detailsFilm.overview,
              release_date: detailsFilm.release_date,
              homepage: detailsFilm.homepage,
              budget: detailsFilm.budget,
            }}
          />
        </>
      ) : (
        <div>Загрузка....</div>
      )}
    </div>
  );
};
