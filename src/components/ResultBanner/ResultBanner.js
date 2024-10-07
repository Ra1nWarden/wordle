import React from 'react';

function ResultBanner({win, count, answer}) {
  let banner;
  if (win) {
    banner = (<p>
      <strong>Congratulations!</strong> Got it in
      <strong> {count} guesses</strong>.
    </p>);
  } else {
    banner = (
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    );
  }
  return <div className={win ? "happy banner" : "sad banner"}>
    {banner}
  </div>;
}

export default ResultBanner;
