// App.js

import { useState } from 'react';
import InputBox from './components/InputBox';  // Make sure to provide the correct path
import useCurrencyInfo from './hooks/currencyInfo';
import './App.css';

function App() {
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat  ">
      <div>
        <div className='w-full  max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-gradient-to-b from-teal-500 to-indigo-500'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <h1 className=' bg-emerald-400/60 rounded-md mx-2'>Currency Convertor</h1>
            <div className=' border-black p-2'>
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className='border-black p-2'>
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisabled
              />
            </div>
            <button type="submit" className="w-full  bg-emerald-400/60 text-black px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
