import React from 'react';
import ExchangeRateTable from './components/ExchangeRateTable';
import ExchangeRateForm from './components/ExchangeRateForm';
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <h1>Exchange Rate Converter</h1>
      <ExchangeRateForm />
      <ExchangeRateTable />
    </div>
  );
}

export default App;
