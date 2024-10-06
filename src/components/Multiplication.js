function Multiplication({ setResult, result, inputRef }) {
    
  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  return (
    <>
      <button onClick={times}>Multiply</button>
    </>
  );
}

export default Multiplication;