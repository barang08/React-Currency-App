import React, { useState } from 'react';
import '../css/Currency.css';
import { VscArrowSwap } from 'react-icons/vsc';
import axios from 'axios';
import Header from './Header';

const BASE_URL = 'https://api.freecurrencyapi.com/v1/latest';
const API_KEY = 'fca_live_7R523gLjNxFMVeXn7ru5RTZWamP6zlCThbzeYD2e';

const Currency = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('TRY');
  const [sum, setSum] = useState(0);
  const [header, setHeader] = useState(false);

  const click = () => {
    const tempFromCurrency = fromCurrency;
    const tempToCurrency = toCurrency;
    
    setFromCurrency(tempToCurrency);
    setToCurrency(tempFromCurrency);
  };

  
  

  const exchange = async (e) => {
    try {
      const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
      const convertedAmount = response.data.data[toCurrency] * amount;
      const formattedAmount = convertedAmount.toFixed(2); // Round to 2 decimal places
      setSum(formattedAmount);
      setAmount(amount); 
      setHeader(true);

    } catch (error) {
      console.error('Error fetching exchange rates:', error);
    }
  };

  

  return (
    <div className='container'>
      <div className='title'>
        {header && <Header amount={amount} fromCurrency={fromCurrency} sum={sum} toCurrency={toCurrency} />}
      </div>

      <div className='main-area'>
        <div className='amount'>
          <p>Amount</p>
          <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)}  />
        </div>
        <div className='from-currency'>
          <p>From</p>
          <select name='unit' id='unit' value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          <option value='AUD'>AUD</option>
          <option value='BGN'>BGN</option>
          <option value='BRL'>BRL</option>
          <option value='CAD'>CAD</option>
          <option value='CHF'>CHF</option>
          <option value='CNY'>CNY</option>
          <option value='CZK'>CZK</option>
          <option value='DKK'>DKK</option>
          <option value='EUR'>EUR</option>
          <option value='GBP'>GBP</option>
          <option value='HKD'>HKD</option>
          <option value='HRK'>HRK</option>
          <option value='HUF'>HUF</option>
          <option value='IDR'>IDR</option>
          <option value='ILS'>ILS</option>
          <option value='INR'>INR</option>
          <option value='ISK'>ISK</option>
          <option value='JPY'>JPY</option>
          <option value='KRW'>KRW</option>
          <option value='MXN'>MXN</option>
          <option value='MYR'>MYR</option>
          <option value='NOK'>NOK</option>
          <option value='NZD'>NZD</option>
          <option value='PHP'>PHP</option>
          <option value='PLN'>PLN</option>
          <option value='SEK'>SEK</option>
          <option value='RON'>RON</option>
          <option value='RUB'>RUB</option>
          <option value='SEK'>SEK</option>
          <option value='SGD'>SGD</option>
          <option value='THB'>THB</option>
          <option value='TRY'>TRY</option>
          <option value='USD'>USD</option>      
          </select>

        </div>
        <button onClick={click} className='svg-button'>
          <VscArrowSwap style={{ color: 'blue' }} />
        </button>
        <div className='to-currency'>
          <p>To</p>
          <select name='unit' id='unit' value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          <option value='AUD'>AUD</option>
          <option value='BGN'>BGN</option>
          <option value='BRL'>BRL</option>
          <option value='CAD'>CAD</option>
          <option value='CHF'>CHF</option>
          <option value='CNY'>CNY</option>
          <option value='CZK'>CZK</option>
          <option value='DKK'>DKK</option>
          <option value='EUR'>EUR</option>
          <option value='GBP'>GBP</option>
          <option value='HKD'>HKD</option>
          <option value='HRK'>HRK</option>
          <option value='HUF'>HUF</option>
          <option value='IDR'>IDR</option>
          <option value='ILS'>ILS</option>
          <option value='INR'>INR</option>
          <option value='ISK'>ISK</option>
          <option value='JPY'>JPY</option>
          <option value='KRW'>KRW</option>
          <option value='MXN'>MXN</option>
          <option value='MYR'>MYR</option>
          <option value='NOK'>NOK</option>
          <option value='NZD'>NZD</option>
          <option value='PHP'>PHP</option>
          <option value='PLN'>PLN</option>
          <option value='SEK'>SEK</option>
          <option value='RON'>RON</option>
          <option value='RUB'>RUB</option>
          <option value='SEK'>SEK</option>
          <option value='SGD'>SGD</option>
          <option value='THB'>THB</option>
          <option value='TRY'>TRY</option>
          <option value='USD'>USD</option>

          </select>
        </div>
      </div>

      <div className='convert'>
        <button className='convert-button' onClick={exchange}  >
          Convert
        </button>
      </div>
    </div>
  );
};

export default Currency;
