
import { useState, useCallback } from 'react';

const WORDS = [
  'mystery', 'clue', 'detective', 'investigate', 'evidence', 'puzzle',
  'secret', 'discover', 'search', 'find', 'solve', 'case'
];

export const useWordDetective = () => {
  const [currentWord, setCurrentWord] = useState(() => 
    WORDS[Math.floor(Math.random() * WORDS.length)]
  );
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const maxWrongGuesses = 6;

  const guessLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters(prev => [...prev, letter]);
    
    if (!currentWord.includes(letter)) {
      setWrongGuesses(prev => prev + 1);
    }
  }, [currentWord, guessedLetters]);

  const resetGame = useCallback(() => {
    setCurrentWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
    setGuessedLetters([]);
    setWrongGuesses(0);
  }, []);

  const isGameWon = currentWord.split('').every(letter => 
    guessedLetters.includes(letter)
  );
  
  const isGameLost = wrongGuesses >= maxWrongGuesses;
  const isGameOver = isGameWon || isGameLost;

  return {
    currentWord,
    guessedLetters,
    wrongGuesses,
    maxWrongGuesses,
    guessLetter,
    resetGame,
    isGameWon,
    isGameLost,
    isGameOver
  };
};
