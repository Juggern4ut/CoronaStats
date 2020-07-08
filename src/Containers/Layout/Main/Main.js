import React from "react";
import Deaths from "./Deaths/Deaths";
import Tests from "./Tests/Tests";
import Cases from "./Cases/Cases";
import CountryContainer from "../CountryContainer/CountryContainer";
import Navigation from "../Navigation/Navigation";

const Main = (props) => {
  let content = null;

  if (props.view === "death") {
    content = <Deaths data={props.data} data2={props.data2}></Deaths>;
  } else if (props.view === "test") {
    content = <Tests data={props.data} data2={props.data2}></Tests>;
  } else {
    content = <Cases data={props.data} data2={props.data2}></Cases>;
  }
  return (
    <main>
      <CountryContainer
        flagClicked={props.flagClicked}
        changed={props.changed}
        image1={props.image1}
        image2={props.image2}
      />

      <Navigation
        switchView={props.switchView}
        data={props.data}
        data2={props.data2}
      />

      {content}
    </main>
  );
};

export default Main;
