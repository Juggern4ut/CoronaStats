import React from "react";
import classes from "./Loader.module.css";

const Loader = (props) => {
  const loader = props.loading ? (
    <div className={classes.Loader}>
      <div className={classes.ldsGrid}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : null;

  return loader;
};

export default Loader;
