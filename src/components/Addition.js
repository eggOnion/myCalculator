function Addition({ setResult, result, inputRef }) {

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  return (
    <>
      <button onClick={plus}>Add</button>
    </>
  );
}

export default Addition;
