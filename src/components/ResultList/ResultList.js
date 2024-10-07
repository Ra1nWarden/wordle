import React from 'react';

function ResultList({guesses}) {
  return (
    <div className="guess-results">
      {guesses && guesses.map((each, idx) => <p className="guess" key={`${each}+${idx}`}>{each}</p>)}   
    </div>
  );
}

export default ResultList;
