import React from 'react';

function GuessInput() {

  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (guess.length !== 5) {
      window.alert('Please enter 5 characters. No more. No less. Have a nice day.')
      return;
    }
    console.log({guess})
    setGuess('');
  }

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter a guess:</label>
      <input 
        id="guess-input" 
        type="text" 
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{1,5}"
        title="Five letter word"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase())
        }}
        />
    </form>
  )
}

export default GuessInput;
