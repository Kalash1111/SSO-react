// import React from 'react';

// export default function Home() {
//   return (
//     <div className='px-4 py-12 max-w-2xl mx-auto'>
//       <h1 className='text-3xl font-bold  mb-4 text-slate-800'>
//         Welcome to Cloud lab 
//       </h1>
   
//     </div>
//   );
// }



import React from 'react';

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Welcome to Cloud Lab</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Hangman is a classic word-guessing game that is played between two players, or in this case, against a computer-generated word. The game's objective is for the player to guess the hidden word correctly before running out of attempts.
        </p>
        <div className="rounded-lg bg-gray-100 border border-gray-200 p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">How to Play Hangman</h2>
          <ul className="list-disc ml-6">
            <li><strong>Setup:</strong> The game begins with a word chosen by the computer or one player (if playing with friends). In our digital version, the computer selects a word from a predefined list.</li>
            <li><strong>Display:</strong> Initially, the word is displayed as a series of dashes, each representing a letter in the word. For example, if the word is "apple," it will be displayed as "_ _ _ _ _".</li>
            <li><strong>Guessing:</strong> The player then starts guessing letters one by one. If the guessed letter is present in the word, it is revealed in its correct position(s). If not, the player loses one of their remaining attempts, and a part of the hangman figure is drawn.</li>
            <li><strong>Feedback:</strong> After each guess, feedback is provided to the player. This includes informing them if the guessed letter is correct or incorrect, updating the displayed word with any revealed letters, and displaying the number of attempts remaining.</li>
            <li><strong>Win or Lose:</strong> The game continues until the player either guesses the word correctly (winning the game) or runs out of attempts (losing the game). If the player guesses the word correctly within the specified number of attempts, they win. If not, they lose, and the full hangman figure is drawn.</li>
            <li><strong>Hints:</strong> In some versions of the game, players may be provided with hints to help them guess the word. These hints could be in the form of clues about the word's meaning, its category, or its association with certain concepts.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
