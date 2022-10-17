import React from "react";
import classes from "./index.module.scss";
import { AppContext } from "../../App";

export const HeaderSearch = () => {
  const { searchValue, setSearchValue } = React.useContext(AppContext);

  return (
    <form className={classes.form}>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
          console.log(e.target.value === searchValue);

          if (e.target.value !== searchValue) {
            setSearchValue(e.target.value);
          }
        }}
        placeholder="Введите название фильма"
      />
    </form>
  );
};
