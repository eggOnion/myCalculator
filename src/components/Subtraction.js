function Subtraction({ setResult, result, inputRef }) {
    
  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  return (
    <>
      <button onClick={minus}>Subtract</button>
    </>
  );
}

export default Subtraction;