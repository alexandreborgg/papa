import React from 'react';
import { Stage } from '../types';
import QuoteCard from './QuoteCard';
import OptionButton from './OptionButton';
import BonusCard from './BonusCard';

interface JourneyStageProps {
  stage: Stage;
  selectedOption: number | null;
  onSelectOption: (optionIndex: number) => void;
  bonusUnlocked: boolean;
  isFinalStage?: boolean;
}

const JourneyStage: React.FC<JourneyStageProps> = ({ 
  stage, 
  selectedOption, 
  onSelectOption, 
  bonusUnlocked,
  isFinalStage = false
}) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-serif text-blue-800 font-semibold mb-4 text-center">
        ETAPA {stage.id} – {stage.title}
      </h2>

      {stage.quote && (
        <QuoteCard quote={stage.quote} author={stage.quoteAuthor || 'Papa Francisco'} />
      )}

      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-blue-100 mb-8">
        <h3 className="text-xl text-blue-900 mb-5 font-medium">
          {stage.question}
        </h3>

        <div className="space-y-2">
          {stage.options.map((option, index) => (
            <OptionButton
              key={index}
              text={option}
              selected={selectedOption === index}
              onClick={() => onSelectOption(index)}
            />
          ))}
        </div>
      </div>

      <BonusCard
        title={stage.bonus.title}
        description={stage.bonus.description}
        visible={bonusUnlocked}
      />

      {isFinalStage && bonusUnlocked && (
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Parabéns por completar sua jornada!</h3>
          <div className="bg-white/10 p-4 rounded mb-4">
            <p className="text-lg font-medium">Oferta Especial</p>
            <p className="text-3xl font-bold mb-2">De R$197 por R$47</p>
            <p className="mb-2">✓ Garantia incondicional de 7 dias</p>
            <p className="font-medium text-yellow-300">✓ Colar Profético da Aliança para as 100 primeiras</p>
          </div>
          
          <a 
            href="https://www.ggcheckout.com/checkout/xR5cx4eX9yph4wYihXuk"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-4 rounded-lg transition-colors duration-300 text-lg uppercase text-center"
          >
            Sim, eu aceito o chamado
          </a>
        </div>
      )}
    </div>
  );
};

export default JourneyStage;