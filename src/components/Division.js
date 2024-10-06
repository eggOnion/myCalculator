function Division({ setResult, result, inputRef }) {
  
  function divide(e) {
    e.preventDefault();

    const inputValue = Number(inputRef.current.value);

    setResult((result) =>
      inputValue === 0
        ? (alert("Error: Division by zero is not allowed!"), result)
        : result / inputValue
    );
  }

  return (
    <>
      <button onClick={divide}>Divide</button>
    </>
  );
}

export default Division;
