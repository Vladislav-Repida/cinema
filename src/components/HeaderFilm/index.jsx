import React from "react";
import { Link } from "react-router-dom";
import classes from "./index.module.scss";

export const HeaderFilm = ({ imgPath }) => {
  const imageUrl = "http://image.tmdb.org/t/p/original/";
  return (
    <div className={classes.HeaderFilm}>
      <Link className={classes.Link} to="/" title="Back">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 12H5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 19L5 12L12 5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <div className={classes.wraper}>
        {imgPath && <img src={imageUrl + imgPath} alt="" />}
      </div>
    </div>
  );
};
