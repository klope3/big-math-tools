import { useState } from "react";
import { compareStringNumbers } from "../math";
import { NumberComparison } from "../types/MathTypes";

export function Tool() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [comparison, setComparison] = useState({} as NumberComparison);

  return (
    <div>
      <input
        type="text"
        name="num1"
        id="num1"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNum1(e.target.value);
          setComparison(compareStringNumbers(e.target.value, num2));
        }}
      />
      <input
        type="text"
        name="num2"
        id="num2"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNum2(e.target.value);
          setComparison(compareStringNumbers(num1, e.target.value));
        }}
      />
      <div>{`Equal: ${comparison.areEqual}, A greater than B: ${comparison.isGreaterThan}, A less than B: ${comparison.isLessThan}`}</div>
    </div>
  );
}
