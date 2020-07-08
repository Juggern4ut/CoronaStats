import React from "react";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
  }

  return (
    <nav className={classes.Navigation}>
      <section className={classes.Section}>
        <div onClick={() => props.switchView("case")}>
          <label className={classes.Label}>Fälle</label>
          <p className={classes.Value}>
            {numberWithCommas(props.data.cases)} /{" "}
            {numberWithCommas(props.data2.cases)}
          </p>
        </div>

        <div onClick={() => props.switchView("test")}>
          <label className={classes.Label}>Tests</label>
          <p className={classes.Value}>
            {numberWithCommas(props.data.tests)} /{" "}
            {numberWithCommas(props.data2.tests)}
          </p>
        </div>

        <div onClick={() => props.switchView("death")}>
          <label className={classes.Label}>Todesfälle</label>
          <p className={classes.Value}>
            {numberWithCommas(props.data.deaths)} /{" "}
            {numberWithCommas(props.data2.deaths)}
          </p>
        </div>
      </section>
    </nav>
  );
};

export default Navigation;
