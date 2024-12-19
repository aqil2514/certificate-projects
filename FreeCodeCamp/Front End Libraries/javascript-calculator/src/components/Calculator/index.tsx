import { useState } from "react";
import "./style.css";
import { useCalculators } from "./_logics";

export default function Calculator() {
  const [prevValue, setPrevValue] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const { changeHandler, clearHandler, numberHandler, operationHandler } =
    useCalculators(value, setValue, prevValue, setPrevValue);

  return (
    <div className="bg-[#F7F8FB] w-1/4 h-full rounded-3xl shadow-2xl drop-shadow-xl shadow-[#60BEFF] grid grid-rows-[30%_auto] p-4">
      {/* Display */}
      <div id="display-container" className="relative">
        <p className="text-right pt-16">{prevValue}</p>
        <input
          type="text"
          value={value}
          onChange={changeHandler}
          name="display"
          id="display"
          className="w-full absolute bottom-0 right-0 border-none outline-none text-right p-4"
        />
      </div>
      {/* Buttons */}
      <div id="calculator-buttons" className="w-full">
        <button
          id="clear"
          className="normal-size !text-[#858585] hover:!text-white number-button font-bold"
          onClick={clearHandler}
        >
          Ac
        </button>
        <button id="blank" className="normal-size bg-[#858585] opacity-15" />
        <button
          id="divide"
          onClick={operationHandler}
          className="normal-size operation-button"
        >
          /
        </button>
        <button
          id="multiply"
          onClick={operationHandler}
          className="normal-size operation-button"
        >
          *
        </button>
        <button
          id="seven"
          onClick={numberHandler}
          className="normal-size number-button"
        >
          7
        </button>
        <button
          id="eight"
          onClick={numberHandler}
          className="normal-size number-button"
        >
          8
        </button>
        <button
          id="nine"
          onClick={numberHandler}
          className="normal-size number-button"
        >
          9
        </button>
        <button
          id="subtract"
          onClick={operationHandler}
          className="normal-size operation-button"
        >
          -
        </button>
        <button
          id="four"
          onClick={numberHandler}
          className="normal-size number-button"
        >
          4
        </button>
        <button
          id="five"
          onClick={numberHandler}
          className="normal-size number-button"
        >
          5
        </button>
        <button
          id="six"
          onClick={numberHandler}
          className="normal-size number-button"
        >
          6
        </button>
        <button
          id="add"
          onClick={operationHandler}
          className="operation-button normal-size !h-32"
        >
          +
        </button>
        <button
          id="one"
          onClick={numberHandler}
          className="normal-size number-button"
        >
          1
        </button>
        <button
          id="two"
          onClick={numberHandler}
          className="normal-size number-button"
        >
          2
        </button>
        <button
          id="three"
          onClick={numberHandler}
          className="normal-size number-button"
        >
          3
        </button>
        <button
          id="zero"
          onClick={numberHandler}
          className="number-button w-32 h-16"
        >
          0
        </button>
        <button
          id="decimal"
          onClick={numberHandler}
          className="normal-size number-button !mb-auto"
        >
          .
        </button>
        <button
          id="equals"
          onClick={operationHandler}
          className="normal-size !h-28 operation-button"
        >
          =
        </button>
      </div>
    </div>
  );
}
