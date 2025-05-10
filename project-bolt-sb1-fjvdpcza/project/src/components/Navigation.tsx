import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  currentStage: number;
  totalStages: number;
  canAdvance: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentStage,
  totalStages,
  canAdvance,
  onPrevious,
  onNext
}) => {
  return (
    <div className="flex justify-between mt-10">
      <button
        onClick={onPrevious}
        disabled={currentStage === 1}
        className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 
          ${currentStage === 1 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-blue-600 hover:bg-blue-50'}`}
      >
        <ChevronLeft className="w-5 h-5 mr-1" />
        Anterior
      </button>
      
      <button
        onClick={onNext}
        disabled={!canAdvance}
        className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 
          ${!canAdvance 
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
            : 'bg-blue-600 text-white hover:bg-blue-700'}`}
      >
        {currentStage < totalStages ? (
          <>Continuar <ChevronRight className="w-5 h-5 ml-1" /></>
        ) : (
          'Finalizar Jornada'
        )}
      </button>
    </div>
  );
};

export default Navigation;