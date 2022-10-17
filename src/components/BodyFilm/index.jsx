import React from "react";
import classes from "./index.module.scss";

export const BodyFilm = ({ dataFilm }) => {
  function moneyFormat(n) {
    return parseFloat(n)
      .toFixed(1)
      .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")
      .replace(".0", "");
  }

  return (
    <div className={classes.BodyFilm}>
      <div className="container">
        <div className={classes.wraper}>
          <div className={classes.block}>
            {dataFilm.release_date && (
              <span className={classes.release}>
                Release: {dataFilm.release_date}
              </span>
            )}
            <h1 className={classes.title}>{dataFilm.title}</h1>
            <p className={classes.desc}>{dataFilm.desc}</p>
            {dataFilm.budget && dataFilm.budget !== 0 ? (
              <h4 className={classes.BudgetTitle}>
                Budget:
                <span className={classes.BudgetValue}>
                  {moneyFormat(dataFilm.budget)}
                </span>
              </h4>
            ) : (
              ""
            )}
            {dataFilm.homepage && (
              <a
                href={dataFilm.homepage}
                className={classes.linkFilm}
                target="_blank"
              >
                Film Page
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
