
import React from 'react';

interface DetectiveCharacterProps {
  wrongGuesses: number;
  maxWrongGuesses: number;
}

const DetectiveCharacter: React.FC<DetectiveCharacterProps> = ({ wrongGuesses, maxWrongGuesses }) => {
  const items = [
    "Hat", "Magnifying Glass", "Badge", "Notebook", "Pen", "Flashlight"
  ];

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-56 h-52 bg-blue-100 rounded-lg border-2 border-blue-300 flex flex-col items-center justify-center">
        {/* Detective Character */}
        <div className="text-8xl">🕵️</div>
        
        {/* Items that disappear with wrong guesses */}
        <div className="absolute -top-2 -right-2 space-y-1">
          {items.slice(0, maxWrongGuesses - wrongGuesses).map((item, index) => (
            <div key={item} className="text-xs bg-yellow-200 px-2 py-1 rounded shadow-sm">
              {item === "Hat" && "🎩"}
              {item === "Magnifying Glass" && "🔍"}
              {item === "Badge" && "🏅"}
              {item === "Notebook" && "📓"}
              {item === "Pen" && "✒️"}
              {item === "Flashlight" && "🔦"}
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-sm text-muted-foreground">
        Detective items remaining: {maxWrongGuesses - wrongGuesses}
      </div>
    </div>
  );
};

export default DetectiveCharacter;
