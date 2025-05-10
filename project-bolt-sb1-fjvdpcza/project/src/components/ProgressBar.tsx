import React from 'react';

interface ProgressBarProps {
  currentStage: number;
  totalStages: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStage, totalStages }) => {
  return (
    <div className="w-full mb-10">
      <div className="flex justify-between mb-2">
        {Array.from({ length: totalStages }, (_, i) => (
          <div key={i} className="relative">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                ${i < currentStage ? 'bg-blue-600 text-white' : i === currentStage ? 'bg-yellow-400 text-blue-900' : 'bg-gray-200 text-gray-500'}`}
            >
              {i + 1}
            </div>
            {i < totalStages - 1 && (
              <div className="absolute top-4 w-full h-0.5 -right-full">
                <div 
                  className={`h-full ${i < currentStage ? 'bg-blue-600' : 'bg-gray-200'}`} 
                  style={{ width: `${i < currentStage - 1 ? '100%' : i === currentStage - 1 ? '50%' : '0%'}` }}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center text-sm font-medium mt-2 text-blue-800">
        Etapa {currentStage} de {totalStages}
      </div>
    </div>
  );
};

export default ProgressBar;