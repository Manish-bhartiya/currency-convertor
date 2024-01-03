// InputBox.js

import { useId } from 'react';

export default function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectCurrency = 'usd',
  currencyOptions = [],
  amountDisabled = false,
  currencyDisabled = false,
  className = ''
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-gradient-to-b from-indigo-500 to-teal-500 p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black mb-2 inline-block">
          {label}
        </label>
        <input
          className="outline-none w-full bg-transparent rounded-lg text-center py-1.5 bg-cyan-400"
          id={amountInputId}
          type="number"
          placeholder="amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-green-300 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
