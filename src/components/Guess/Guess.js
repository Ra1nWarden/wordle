import React from 'react';
import { range } from '../../utils';

function Guess({word}) {
  return (
    <p className="guess">
      {range(0, 5).map((each) => <span key={each} className="cell">{word && word[each]}</span>)}
    </p>
  );
}

export default Guess;
