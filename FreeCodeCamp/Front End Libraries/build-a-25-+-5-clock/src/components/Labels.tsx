import { ArrowDown, ArrowUp } from "react-bootstrap-icons";
import { useDecreaseValue, useIncreaseValue } from "../utils/hooks";
import React, { SetStateAction } from "react";

interface LabelProps {
  id: "session" | "break";
  text: "Session" | "Break";
  defaultValue: number;
  useAction: React.Dispatch<SetStateAction<number>>;
}

export default function Label({
  id,
  text,
  defaultValue,
  useAction,
}: LabelProps) {
  return (
    <div>
      <h3 id={`${id}-label`} className="text-white font-bold underline">
        {text} Label
      </h3>
      <div className="flex justify-center gap-4">
        <button
          id={`${id}-decrement`} // eslint-disable-next-line react-hooks/rules-of-hooks
          onClick={() => useDecreaseValue(defaultValue, useAction)}
        >
          <ArrowDown />
        </button>
        <div id={`${id}-length`}>{defaultValue}</div>
        <button
          id={`${id}-increment`}
          // eslint-disable-next-line react-hooks/rules-of-hooks
          onClick={() => useIncreaseValue(defaultValue, useAction)}
        >
          <ArrowUp />
        </button>
      </div>
    </div>
  );
}
