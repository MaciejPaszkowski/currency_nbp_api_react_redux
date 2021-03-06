import React from "react";
import Currency from "../Currency";
import { v4 as uuidv4 } from "uuid";
import "./CurrenciesList.scss";

const CurrenciesList = ({ data, icon, onClick }) => {
  return (
    <table className="table">
      <thead className="table__thead">
        <tr className="table__thead-tr">
          <th className="table__thead-th">CODE</th>
          <th className="table__thead-th">CURRENCY</th>
          <th className="table__thead-th">EXCHANGE RATE</th>
        </tr>
      </thead>
      <tbody className="table__tbody">
        {data.map((currency) => (
          // { console.log(currency) }
          <Currency
            key={uuidv4()}
            data={currency}
            icon={icon}
            onClick={onClick}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CurrenciesList;
