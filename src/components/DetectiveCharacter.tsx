
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
    <div className="flex flex-col items-center space-y-6">
      {/* Detective Character Box */}
      <div className="relative w-56 h-80 bg-blue-100 rounded-lg border-2 border-blue-300 flex flex-col items-center justify-center">
        {/* Detective Character - Female */}
        <div className="text-9xl">🕵️‍♀️</div>
        
        <div className="text-sm text-muted-foreground mt-2">
          Detective items remaining: {maxWrongGuesses - wrongGuesses}
        </div>
      </div>
      
      {/* Items positioned underneath the detective box and centered */}
      <div className="flex items-center justify-center space-x-3">
        {items.slice(0, maxWrongGuesses - wrongGuesses).map((item, index) => (
          <div key={item} className="bg-yellow-200 p-3 rounded-lg shadow-sm">
            <span className="text-2xl">
              {item === "Hat" && "🎩"}
              {item === "Magnifying Glass" && "🔍"}
              {item === "Badge" && "🏅"}
              {item === "Notebook" && "📓"}
              {item === "Pen" && "✒️"}
              {item === "Flashlight" && "🔦"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetectiveCharacter;
