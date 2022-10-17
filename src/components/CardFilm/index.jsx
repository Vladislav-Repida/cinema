import React from "react";
import classes from "./index.module.scss";
import { Link } from "react-router-dom";

export const CardFilm = ({ data }) => {
  const { title, poster_path, backdrop_path, id } = data;
  const imageUrl = "http://image.tmdb.org/t/p/w500";

  if (true) {
    return (
      <Link className={classes.Link} to={`details/${id}`}>
        <div className={classes.CardFilm} title={title}>
          <div className={classes.cover}></div>
          {poster_path ? (
            <img src={imageUrl + poster_path} width="300px" alt="" />
          ) : (
            <div className={classes.placeholder}>
              <h3>{title}</h3>
            </div>
          )}
        </div>
      </Link>
    );
  }
};
