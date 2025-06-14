
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
    <div className="flex items-start space-x-6">
      {/* Detective Character Box */}
      <div className="relative w-56 h-80 bg-blue-100 rounded-lg border-2 border-blue-300 flex flex-col items-center justify-center">
        {/* Detective Character - Female */}
        <div className="text-9xl">🕵️‍♀️</div>
        
        <div className="text-sm text-muted-foreground mt-2">
          Detective items remaining: {maxWrongGuesses - wrongGuesses}
        </div>
      </div>
      
      {/* Items positioned next to the detective box and centered vertically */}
      <div className="flex flex-col justify-center space-y-2">
        {items.slice(0, maxWrongGuesses - wrongGuesses).map((item, index) => (
          <div key={item} className="text-sm bg-yellow-200 px-3 py-2 rounded-lg shadow-sm flex items-center space-x-2">
            <span className="text-lg">
              {item === "Hat" && "🎩"}
              {item === "Magnifying Glass" && "🔍"}
              {item === "Badge" && "🏅"}
              {item === "Notebook" && "📓"}
              {item === "Pen" && "✒️"}
              {item === "Flashlight" && "🔦"}
            </span>
            <span className="font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetectiveCharacter;
