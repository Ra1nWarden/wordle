import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import ResultList from '../ResultList/ResultList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  return (
    <div>
      <ResultList guesses={guesses} answer={answer} />
      <GuessInput setGuesses={setGuesses} guesses={guesses} answer={answer} />
    </div>
  );
}

export default Game;
