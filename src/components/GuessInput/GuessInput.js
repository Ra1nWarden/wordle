import React from 'react';

function GuessInput() {
  const [input, setInput] = React.useState('');
  const changeInput = (event) => setInput(event.target.value.toUpperCase());
  const submitInput = (event) => {
    event.preventDefault();
    if(input.length !== 5) {
      return;
    }
    console.log(input);
    setInput('');
  };
  return (
    <form className="guess-input-wrapper" onSubmit={submitInput}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={input} onChange={changeInput}/>
    </form>
  );
}

export default GuessInput;
