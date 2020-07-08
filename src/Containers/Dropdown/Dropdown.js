import React from "react";
import classes from "./Dropdown.module.css";
import countries from "../../Data/countries.json";

const Dropdown = (props) => {
  const options = countries.map((country) => {
    return (
      <option key={country.short} value={country.short}>
        {country.name}
      </option>
    );
  });

  return (
    <div className={classes.Dropdown}>
      <img onClick={props.flagClicked} src={props.image} alt="Flagge" />
      <select
        defaultValue={props.selected}
        onChange={(e) => props.changed(e, props.two)}
      >
        <option value="">Global</option>
        {options}
      </select>
    </div>
  );
};

export default Dropdown;
