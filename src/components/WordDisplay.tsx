
import React from 'react';

interface WordDisplayProps {
  word: string;
  guessedLetters: string[];
}

const WordDisplay: React.FC<WordDisplayProps> = ({ word, guessedLetters }) => {
  return (
    <div className="flex justify-center space-x-2 my-8">
      {word.split('').map((letter, index) => (
        <div
          key={index}
          className="w-12 h-12 border-b-2 border-blue-400 flex items-center justify-center text-2xl font-bold text-blue-800"
        >
          {guessedLetters.includes(letter.toLowerCase()) ? letter.toUpperCase() : ''}
        </div>
      ))}
    </div>
  );
};

export default WordDisplay;
