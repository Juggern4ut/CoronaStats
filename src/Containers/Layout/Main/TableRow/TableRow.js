import React from "react";

const TableRow = (props) => {
  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
  }

  function getWording(number) {
    return number <= 0 ? "weniger" : "mehr";
  }

  const diff = props.value1 - props.value2;
  const subtext = props.showInfo ? (
    <span className="subText">
      Dieser Wert wurde Heute sehr wahrscheinlich noch nicht aktualisiert!
    </span>
  ) : null;

  const diffText =
    !isNaN(props.value1) && !isNaN(props.value2) ? (
      <span className="subText">
        {numberWithCommas(Math.abs(Math.floor(diff)))} {getWording(diff)}
      </span>
    ) : null;

  return (
    <tr>
      <td>
        {props.title}
        {subtext}
      </td>
      <td>{numberWithCommas(props.value1)}{diffText}</td>
      <td>{numberWithCommas(props.value2)}</td>
    </tr>
  );
};

export default TableRow;
