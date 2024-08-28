import React, { useId } from "react";
// useId is a react hook for generating unique ids that can be passed to accessibility attributes
// it doesnot take parameter
// do not call useId to generate keys in a list
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,

  className = "",
}) {
  const AmountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={AmountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          name=""
          id={AmountInputId}
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={
            (e) => onAmountChange && onAmountChange(Number(e.target.value))
            // if not understood then read the detail description
            /*   User Interaction: When a user types into this input field, the onChange event is fired.
Event Handler Execution: The event handler checks if the onAmountChange function is defined.
 If it is, the current value of the input (retrieved via e.target.value) is converted to a number 
 and then passed as an argument to the onAmountChange function. */
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Current Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          name=""
          id=""
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option> // remember the key in loop in react because value repeat matrai hunxa
            //For each currency in currencyOptions, a new <option> element is created.
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
