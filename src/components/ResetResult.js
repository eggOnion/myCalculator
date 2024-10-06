function ResetResult({ setResult }) {
  
  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return <button onClick={resetResult}>Reset Result</button>;
}

export default ResetResult;
