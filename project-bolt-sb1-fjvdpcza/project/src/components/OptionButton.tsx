import React from 'react';

interface OptionButtonProps {
  text: string;
  onClick: () => void;
  selected?: boolean;
}

const OptionButton: React.FC<OptionButtonProps> = ({ text, onClick, selected = false }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 md:p-5 mb-3 rounded-lg transition-all duration-300 border 
        ${selected 
          ? 'bg-blue-50 border-blue-500 text-blue-800 shadow-md' 
          : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50'}`}
    >
      <div className="flex items-center">
        <div 
          className={`w-5 h-5 rounded-full mr-3 flex-shrink-0 transition-all duration-300 border-2
            ${selected ? 'border-blue-500 bg-blue-500' : 'border-gray-300 bg-white'}`}
        >
          {selected && (
            <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
        <span className="text-base md:text-lg">{text}</span>
      </div>
    </button>
  );
};

export default OptionButton;