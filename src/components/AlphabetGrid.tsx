
import React from 'react';
import { Button } from '@/components/ui/button';

interface AlphabetGridProps {
  guessedLetters: string[];
  onLetterClick: (letter: string) => void;
  disabled: boolean;
}

const AlphabetGrid: React.FC<AlphabetGridProps> = ({ guessedLetters, onLetterClick, disabled }) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 max-w-2xl mx-auto">
      {alphabet.map((letter) => {
        const isGuessed = guessedLetters.includes(letter.toLowerCase());
        return (
          <Button
            key={letter}
            onClick={() => onLetterClick(letter.toLowerCase())}
            disabled={disabled || isGuessed}
            variant={isGuessed ? "secondary" : "outline"}
            className="h-10 w-10 text-sm font-semibold"
          >
            {letter}
          </Button>
        );
      })}
    </div>
  );
};

export default AlphabetGrid;
