import { useState, useRef } from "react";

import Addition from "./Addition";
import Subtraction from "./Subtraction";
import Multiplication from "./Multiplication";
import Division from "./Division";
import ResetInput from "./ResetInput";
import ResetResult from "./ResetResult";

function Calculator() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  return (
    <div className="calculator-container">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />

        <Addition inputRef={inputRef} result={result} setResult={setResult} />
        <Subtraction
          inputRef={inputRef}
          result={result}
          setResult={setResult}
        />
        <Multiplication
          inputRef={inputRef}
          result={result}
          setResult={setResult}
        />
        <Division inputRef={inputRef} result={result} setResult={setResult} />
        <ResetInput inputRef={inputRef} />
        <ResetResult setResult={setResult} />
      </form>
    </div>
  );
}

export default Calculator;
