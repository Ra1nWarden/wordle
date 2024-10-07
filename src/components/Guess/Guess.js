import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({word, answer}) {
  const status = checkGuess(word, answer);
  return (
    <p className="guess">
      {
        range(0, 5).map((each) => <span key={each} className={`cell ${status && status[each].status}`}>
          {word && word[each]}
        </span>)
      }
    </p>
  );
}

export default Guess;
