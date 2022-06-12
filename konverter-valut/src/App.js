import './App.css';
import CurrencyConverter from './Components/CurrencyConverter/CurrencyConverter';
import ExchangeRate from './Components/ExchangeRate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExchangeRate />
      </header>
      <CurrencyConverter/>
    </div>
  );
}

export default App;
