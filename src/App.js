import { useState } from "react";
import "./App.css";

function App() {
  const [intialPrice, setIntialPrice] = useState(0);
  const [quatity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState("");

  const flag = intialPrice > 0 && quatity > 0 && price > 0;

  const clickHandler = (ip, q, p) => {
    if (p > ip) {
      let profit = (p - ip) * q;
      let profitPerc = ((p - ip) / ip) * 100;
      setStatus(
        `The profit is Rs.${profit} and the profit percentage is ${profitPerc}% `
      );
    } else if (p < ip) {
      let loss = (ip - p) * q;
      let lossPerc = ((ip - p) / p) * 100;
      setStatus(
        `The profit is Rs.${loss} and the profit percentage is ${lossPerc}% `
      );
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Stock Profit or Loss Calculator</h1>
      </header>
      <main>
        <h3>At what rate did you buy the stocks?</h3>
        <input
          type='number'
          value={intialPrice}
          onChange={(e) => setIntialPrice(e.target.value)}
        />
        <h3>How many stocks did you buy?</h3>
        <input
          type='number'
          value={quatity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <h3>What is the current rate of those stocks?</h3>
        <input
          type='number'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {flag ? (
          <button
            disabled={!flag}
            onClick={() => clickHandler(intialPrice, price, quatity)}>
            Tell Me
          </button>
        ) : (
          <h3> All the Number Should Be Greater than 0</h3>
        )}
        <h1>{status}</h1>
      </main>
      <footer>
        <h3>
          Privacy Notice : We do not store your data. So, no need to worry about
          your data misuse! 🙂{" "}
        </h3>
      </footer>
    </div>
  );
}

export default App;
