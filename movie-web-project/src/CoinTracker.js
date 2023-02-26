import { useEffect, useState } from "react";
import "./CoinTracker.css";

function CoinTraker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin) => (
            <div className="coin-box">
              <li key={coin.id}>
                <a
                  rel="noreferrer"
                  href={`https://coinpaprika.com/ko/coin/${coin.id}/`}
                  target="_blank"
                >
                  {coin.name} ({coin.symbol}):{" "}
                </a>
                {Math.round(coin.quotes.USD.price)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                USD
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
export default CoinTraker;
