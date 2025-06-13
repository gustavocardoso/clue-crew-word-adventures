
import React from 'react';
import { Button } from '@/components/ui/button';
import DetectiveCharacter from '@/components/DetectiveCharacter';
import WordDisplay from '@/components/WordDisplay';
import AlphabetGrid from '@/components/AlphabetGrid';
import GameStats from '@/components/GameStats';
import { useWordDetective } from '@/hooks/useWordDetective';

const Index = () => {
  const {
    currentWord,
    guessedLetters,
    wrongGuesses,
    maxWrongGuesses,
    guessLetter,
    resetGame,
    isGameWon,
    isGameLost,
    isGameOver
  } = useWordDetective();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-600 mb-2 tracking-wide">
            WORD DETECTIVE
          </h1>
          <p className="text-lg text-muted-foreground">
            Help the detective solve the mystery word!
          </p>
        </div>

        {/* Detective Character - Centered */}
        <div className="flex justify-center mb-8">
          <DetectiveCharacter 
            wrongGuesses={wrongGuesses} 
            maxWrongGuesses={maxWrongGuesses} 
          />
        </div>

        {/* Game Stats */}
        <GameStats mistakes={wrongGuesses} maxMistakes={maxWrongGuesses} />

        {/* Word Display */}
        <WordDisplay word={currentWord} guessedLetters={guessedLetters} />

        {/* Alphabet Grid */}
        <AlphabetGrid 
          guessedLetters={guessedLetters}
          onLetterClick={guessLetter}
          disabled={isGameOver}
        />

        {/* New Game Button */}
        <div className="text-center mt-8">
          <Button onClick={resetGame} variant="outline">
            New Case
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
