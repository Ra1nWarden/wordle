import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import ResultBanner from '../ResultBanner/ResultBanner';

function GuessInput({guesses, setGuesses, answer}) {
  const [gameState, setGameState] = React.useState(0);
  const [input, setInput] = React.useState('');
  const changeInput = (event) => setInput(event.target.value.toUpperCase());
  const submitInput = (event) => {
    event.preventDefault();
    if(input.length !== 5) {
      return;
    }
    console.log(input);
    setGuesses([...guesses, input]);
    if (input === answer) {
      setGameState(1);
    } else if (guesses.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setGameState(-1);
    }
    setInput('');
  };
  return (
    <form className="guess-input-wrapper" onSubmit={submitInput}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input disabled={gameState !== 0} id="guess-input" type="text" value={input} onChange={changeInput}/>
      {gameState !== 0 && <ResultBanner win={gameState === 1} count={guesses.length} answer={answer} />}
    </form>
  );
}

export default GuessInput;
