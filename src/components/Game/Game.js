import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput/GuessInput';
import PreviousGuesses from '../PreviousGuesses/PreviousGuesses';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(preliminaryGuess) {
    const nextGuesses = [...guesses, preliminaryGuess]
    setGuesses([...guesses, preliminaryGuess]);
    // check for win or lose
    if (preliminaryGuess.toUpperCase() === answer) {
      setGameStatus('won')
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }

  return (
    <>
      <PreviousGuesses guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus} />
      {gameStatus === 'won' && (
        <WonBanner 
          numOfGuesses={guesses.length}
         />
      )}
      {gameStatus === 'lost' && (
        <LostBanner 
          answer={answer}
         />
      )}
      {/* {gameStatus !== 'running' && (
        <Banner gameStatus={gameStatus} numOfGuesses={guesses.length} answer={answer} />
      )} */}
    </>
  );
}

export default Game;
