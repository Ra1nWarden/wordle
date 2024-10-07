import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function ResultList({guesses, answer}) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((each, index) => <Guess key={index} word={guesses[each]} answer={answer} />)}
    </div>
  );
}

export default ResultList;
