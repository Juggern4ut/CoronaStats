import React from "react";
import Dropdown from "../../Dropdown/Dropdown";
import classes from "./CountryContainer.module.css";

const CountryContainer = (props) => {
  return (
    <section className={classes.CountryContainer}>
      <Dropdown
        selected="CH"
        changed={props.changed}
        image={props.image1}
        two={false}
        flagClicked={props.flagClicked}
      />
      <Dropdown
        selected="DE"
        changed={props.changed}
        image={props.image2}
        two={true}
        flagClicked={props.flagClicked}
      />
    </section>
  );
};

export default CountryContainer;
