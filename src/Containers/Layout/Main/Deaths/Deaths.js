import React from "react";
import TableRow from "../TableRow/TableRow";

const Deaths = (props) => {
  let textToday =
    props.data.todayCases === 0 &&
    props.data.todayRecovered === 0 &&
    props.data.todayDeaths === 0
      ? true
      : false;

  return (
    <table className="deaths">
      <thead>
        <tr className="subTitle">
          <th>Sterblichkeit</th>
          <th>{props.data.countryInfo.iso2}</th>
          <th>{props.data2.countryInfo.iso2}</th>
        </tr>
      </thead>
      <tbody>
        <TableRow
          value1={props.data.deaths}
          value2={props.data2.deaths}
          title="Todesfälle total"
        />
        <TableRow
          value1={props.data.todayDeaths}
          value2={props.data2.todayDeaths}
          title="Todesfälle heute"
          showInfo={textToday}
        />
        <TableRow
          value1={props.data.critical}
          value2={props.data2.critical}
          title="Patienten in kritischem Zustand"
        />
        <TableRow
          value1={props.data.oneDeathPerPeople}
          value2={props.data2.oneDeathPerPeople}
          title="Ein Todesfall per Einwohner"
        />
      </tbody>
    </table>
  );
};

export default Deaths;
