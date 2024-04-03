import React from 'react';

function Banner({status, children}) {

  return (
    <div className={`${status} banner`}>
      {children}
    </div>
  )


  // *** Banner v1 ****
  // if (gameStatus === 'won') {
  //   return (
  //     <div class="happy banner">
  //       <p>
  //         <strong>Congratulations!</strong> Got it in
  //         {' '}
  //         <strong>
  //           {numOfGuesses === 1
  //             ? '1 guess'
  //             : `${numOfGuesses} guesses`}
  //         </strong>.
  //       </p>
  //     </div>
  //   )
  // } else if (gameStatus === 'lost') {
  //   return (
  //     <div class="sad banner">
  //       <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  //     </div>
  //   )
  // }

}

export default Banner;
