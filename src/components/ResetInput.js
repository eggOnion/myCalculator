function ResetInput({ inputRef }) {
    
  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = 0;
  }

  return <button onClick={resetInput}>Reset Input</button>;
}

export default ResetInput;
