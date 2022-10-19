import "./Table.scss";
import { useState, useEffect } from "react";

function Table() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const [data, setData] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();

    setData(responseJSON);
    console.log(responseJSON);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th className="th-name">Name</th>
            <th>Price</th>
            <th>Price 24h</th>
            <th>Market Cap</th>
          </tr>
        </thead>

        <tbody>
          {!data
            ? "Cargando..."
            : data.map((data) => {
                return (
                  <tr key={data.market_cap_rank}>
                    <td className="num"> {data.market_cap_rank} </td>
                    <td className="info">
                      <img className="tbody-img" src={data.image} />
                      <span className="symbol"> {data.symbol} </span>
                      <span className="name"> {data.name} </span>
                    </td>
                    <td className="price"> ${data.current_price} </td>
                    <td className={(data.price_change_percentage_24h > 0) == true ? "green" : "red"}>{data.price_change_percentage_24h}% </td>
                    <td> ${data.market_cap} </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
