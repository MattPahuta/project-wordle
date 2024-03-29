import React from 'react';

function GuessInput({handleSubmitGuess}) {

  const [preliminaryGuess, setPreliminaryGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(preliminaryGuess);
    setPreliminaryGuess('');
  }

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter your guess:</label>
      <input 
        id="guess-input" 
        type="text" 
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={preliminaryGuess}
        onChange={(event) => {
          setPreliminaryGuess(event.target.value.toUpperCase())
        }}
        />
    </form>
  )
}

export default GuessInput;
