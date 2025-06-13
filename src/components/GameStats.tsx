
import React from 'react';

interface GameStatsProps {
  mistakes: number;
  maxMistakes: number;
}

const GameStats: React.FC<GameStatsProps> = ({ mistakes, maxMistakes }) => {
  return (
    <div className="text-center mb-6">
      <div className="text-lg font-semibold text-muted-foreground">
        Mistakes: {mistakes} / {maxMistakes}
      </div>
      <div className="w-full max-w-xs mx-auto mt-2 bg-gray-200 rounded-full h-2">
        <div 
          className="bg-orange-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(mistakes / maxMistakes) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default GameStats;
