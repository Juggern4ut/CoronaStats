import React from "react";
import TableRow from "../TableRow/TableRow";

const Cases = (props) => {

  let textToday =
    props.data.todayCases === 0 &&
    props.data.todayRecovered === 0 &&
    props.data.todayDeaths === 0
      ? true
      : false;

  return (
    <table className="cases">
      <thead>
        <tr className="subTitle">
          <th>Ansteckungen</th>
          <th>{props.data.countryInfo.iso2}</th>
          <th>{props.data2.countryInfo.iso2}</th>
        </tr>
      </thead>
      <tbody>
        <TableRow
          value1={props.data.population}
          value2={props.data2.population}
          title="Einwohner"
        />
        <TableRow
          value1={props.data.confirmed}
          value2={props.data2.confirmed}
          title="Fälle total"
        />
        <TableRow
          value1={props.data.todayCases}
          value2={props.data2.todayCases}
          title="Fälle heute"
          showInfo={textToday}
        />
        <TableRow
          value1={props.data.recovered}
          value2={props.data2.recovered}
          title="Genesen total"
        />
        <TableRow
          value1={props.data.todayRecovered}
          value2={props.data2.todayRecovered}
          title="Genesen heute"
          showInfo={textToday}
        />
        <TableRow
          value1={props.data.active}
          value2={props.data2.active}
          title="Aktive fälle"
        />
        <TableRow
          value1={props.data.casesPerOneMillion}
          value2={props.data2.casesPerOneMillion}
          title="Fälle pro eine Million Einwohner"
        />
      </tbody>
    </table>
  );
};

export default Cases;
