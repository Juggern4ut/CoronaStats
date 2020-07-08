import React from "react";
import TableRow from "../TableRow/TableRow";

const Tests = (props) => {
  return (
    <table className="tests">
      <thead>
        <tr className="subTitle">
          <th>Tests</th>
          <th>{props.data.countryInfo.iso2}</th>
          <th>{props.data2.countryInfo.iso2}</th>
        </tr>
      </thead>
      <tbody>
        <TableRow
          value1={props.data.tests}
          value2={props.data2.tests}
          title="Total durchgeführte Tests"
        />
        <TableRow
          value1={props.data.testsPerOneMillion}
          value2={props.data2.testsPerOneMillion}
          title="Tests auf eine Million Einwohner"
        />
        <TableRow
          value1={props.data.oneTestPerPeople}
          value2={props.data2.oneTestPerPeople}
          title="Ein Test per Einwohner"
        />
      </tbody>
    </table>
  );
};

export default Tests;
