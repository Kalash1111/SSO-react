// // import React, { useState } from 'react';

// // export default function HangmanGame() {
// //   const words = [
// //     { word: 'apple', hint: 'A fruit often associated with teachers' },
// //     { word: 'banana', hint: 'A yellow fruit with a curved shape' },
// //     { word: 'cherry', hint: 'A small, round fruit that is typically red' },
// //     { word: 'orange', hint: 'A citrus fruit known for its color and juice' },
// //     { word: 'strawberry', hint: 'A red fruit with small seeds on the outside' },
// //   ];

// //   const [randomIndex, setRandomIndex] = useState(generateRandomIndex());
// //   const [guess, setGuess] = useState('');
// //   const [message, setMessage] = useState('');
// //   const [guessesLeft, setGuessesLeft] = useState(5);

// //   function generateRandomIndex() {
// //     return Math.floor(Math.random() * words.length);
// //   }

// //   function handleGuessChange(event) {
// //     setGuess(event.target.value.toLowerCase());
// //   }

// //   function handleGuessSubmit(event) {
// //     event.preventDefault();
// //     if (guess === words[randomIndex].word) {
// //       setMessage(`Congratulations! You guessed the word "${words[randomIndex].word}" correctly.`);
// //     } else {
// //       setGuessesLeft(guessesLeft - 1);
// //       if (guessesLeft === 0) {
// //         setMessage(`Game over! The word was "${words[randomIndex].word}". Try again.`);
// //       } else {
// //         setMessage('Incorrect guess. Keep trying!');
// //       }
// //     }
// //   }

// //   function startNewGame() {
// //     setRandomIndex(generateRandomIndex());
// //     setGuess('');
// //     setMessage('');
// //     setGuessesLeft(5);
// //   }

// //   return (
// //     <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex flex-col items-center justify-center">
// //       <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
// //         <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Word Guessing Game</h1>
// //         <p className="text-center text-gray-800 mb-4">Hint: {words[randomIndex].hint}</p>
// //         <form onSubmit={handleGuessSubmit} className="flex flex-col items-center">
// //           <input
// //             type="text"
// //             value={guess}
// //             onChange={handleGuessChange}
// //             placeholder="Enter your guess"
// //             className="w-full py-3 px-4 mb-4 bg-gray-100 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500"
// //           />
// //           <button
// //             type="submit"
// //             className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           >
// //             Submit Guess
// //           </button>
// //         </form>
// //         {message && <p className="text-center text-gray-800 mt-4">{message}</p>}
// //         <p className="text-center text-gray-800 mt-4">Guesses left: {guessesLeft}</p>
// //         <button onClick={startNewGame} className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 mt-4">
// //           Start New Game
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }




// import React, { useState } from 'react';

// export default function HangmanGame() {
//   const words = [
//     { word: 'apple', hints: ['A fruit often associated with doctors'] },
//     { word: 'banana', hints: ['A yellow fruit with a curved shape'] },
//     { word: 'cherry', hints: ['A small, round fruit that is typically red'] },
//     { word: 'orange', hints: ['A citrus fruit known for its color and juice'] },
//     { word: 'strawberry', hints: ['A red fruit with small seeds on the outside'] },
//   ];

//   const [randomIndex, setRandomIndex] = useState(generateRandomIndex());
//   const [guess, setGuess] = useState('');
//   const [message, setMessage] = useState('');
//   const [guessesLeft, setGuessesLeft] = useState(5);
//   const [hintIndex, setHintIndex] = useState(0); // Track current hint index

//   function generateRandomIndex() {
//     return Math.floor(Math.random() * words.length);
//   }

//   function handleGuessChange(event) {
//     setGuess(event.target.value.toLowerCase());
//   }

//   function handleGuessSubmit(event) {
//     event.preventDefault();
//     if (guess === words[randomIndex].word) {
//       setMessage(`Congratulations! You guessed the word "${words[randomIndex].word}" correctly.`);
//       if (hintIndex < words[randomIndex].hints.length - 1) {
//         setHintIndex(hintIndex + 1);
//         setMessage(`Hint: ${words[randomIndex].hints[hintIndex + 1]}`);
//         setGuess('');
//       }
//     } else {
//       setGuessesLeft(guessesLeft - 1);
//       if (guessesLeft === 0) {
//         setMessage(`Game over! The word was "${words[randomIndex].word}". Try again.`);
//         return; // End game if no guesses left
//       } else {
//         setMessage('Incorrect guess. Keep trying!');
//       }
//     }
  
//   }
  

//   function startNewGame() {
//     setRandomIndex(generateRandomIndex());
//     setGuess('');
//     setMessage('');
//     setGuessesLeft(5);
//     setHintIndex(0);
//   }

//   return (
//     <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex flex-col items-center justify-center">
//       <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
//         <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Word Guessing Game</h1>
//         <p className="text-center text-gray-800 mb-4">Hint: {words[randomIndex].hints[hintIndex]}</p>
//         <form onSubmit={handleGuessSubmit} className="flex flex-col items-center">
//           <input
//             type="text"
//             value={guess}
//             onChange={handleGuessChange}
//             placeholder="Enter your guess"
//             className="w-full py-3 px-4 mb-4 bg-gray-100 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500"
//           />
//           <button
//             type="submit"
//             className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Submit Guess
//           </button>
//         </form>
//         {message && <p className="text-center text-gray-800 mt-4">{message}</p>}
//         <p className="text-center text-gray-800 mt-4">Guesses left: {guessesLeft}</p>
//         <button onClick={startNewGame} className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 mt-4">
//           Start New Game
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';

export default function HangmanGame() {
  const words = [
    { word: 'apple', hints: ['A fruit often associated with doctors'] },
    { word: 'banana', hints: ['A yellow fruit with a curved shape'] },
    { word: 'cherry', hints: ['A small, round fruit that is typically red'] },
    { word: 'orange', hints: ['A citrus fruit known for its color and juice'] },
    { word: 'strawberry', hints: ['A red fruit with small seeds on the outside'] },
  ];

  const [randomIndex, setRandomIndex] = useState(generateRandomIndex());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [guessesLeft, setGuessesLeft] = useState(5);
  const [hintIndex, setHintIndex] = useState(0); // Track current hint index

  function generateRandomIndex() {
    return Math.floor(Math.random() * words.length);
  }

  function handleGuessChange(event) {
    setGuess(event.target.value.toLowerCase());
  }

  function handleGuessSubmit(event) {
    event.preventDefault();
    if (guess === words[randomIndex].word) {
      setMessage(`Congratulations! You guessed the word "${words[randomIndex].word}" correctly.`);
      if (hintIndex < words[randomIndex].hints.length - 1) {
        setHintIndex(hintIndex + 1);
        setMessage(`Hint: ${words[randomIndex].hints[hintIndex + 1]}`);
        setGuess('');
      }
    } else {
      setGuessesLeft(guessesLeft - 1);
      if (guessesLeft === 0) {
        setMessage(`Game over! The word was "${words[randomIndex].word}". Try again.`);
        return; // End game if no guesses left
      } else {
        setMessage('Incorrect guess. Keep trying!');
      }
    }
  }

  function startNewGame() {
    setRandomIndex(generateRandomIndex());
    setGuess('');
    setMessage('');
    setGuessesLeft(5);
    setHintIndex(0);
  }

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Word Guessing Game</h1>
        <p className="text-center text-gray-800 mb-4">Hint: {words[randomIndex].hints[hintIndex]}</p>
        <form onSubmit={handleGuessSubmit} className="flex flex-col items-center mb-4">
          <input
            type="text"
            value={guess}
            onChange={handleGuessChange}
            placeholder="Enter your guess"
            className="w-full py-3 px-4 mb-2 bg-gray-100 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Guess
          </button>
        </form>
        {message && <p className="text-center text-gray-800 mt-4">{message}</p>}
        <p className="text-center text-gray-800">Guesses left: {guessesLeft}</p>
        <button onClick={startNewGame} className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 mt-4">
          Start New Game
        </button>
      </div>
    </div>
  );
}

