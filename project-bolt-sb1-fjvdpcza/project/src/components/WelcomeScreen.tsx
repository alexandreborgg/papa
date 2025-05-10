import React from 'react';
import { Move as Dove } from 'lucide-react';
import colarImage from '../img/colar.jpg';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center text-center animate-fade-in">
      <div className="bg-blue-500 text-white p-3 rounded-full mb-6">
        <Dove className="h-10 w-10" />
      </div>
      
      <h1 className="text-3xl md:text-4xl font-serif text-blue-800 font-semibold mb-4">
        Jornada Espiritual
      </h1>
      
      <p className="text-xl text-blue-700 font-serif mb-6">
        Baseada nos ensinamentos do Papa Francisco
      </p>
      
      <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-md border border-blue-100 mb-8 max-w-2xl">
        <p className="text-blue-900 mb-6">
          Bem-vinda a esta jornada em 8 etapas com reflexões profundas e recompensas espirituais. 
          Cada passo revelará novos ensinamentos e fortalecerá sua conexão espiritual.
        </p>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-yellow-800 font-medium">
            As 100 primeiras participantes receberão um colar profético exclusivo como símbolo da sua jornada espiritual.
          </p>
          <img 
            src={colarImage} 
            alt="Colar Profético" 
            className="w-full max-w-md mx-auto mt-4 rounded-lg shadow-md"
          />
        </div>
        
        <button 
          onClick={onStart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300"
        >
          Iniciar Minha Jornada Espiritual
        </button>
      </div>
      
      <p className="text-sm text-blue-600">
        "A fé não é uma luz que dissipa todas as nossas trevas, mas uma lâmpada que guia nossos passos na noite." — Papa Francisco
      </p>
    </div>
  );
};

export default WelcomeScreen;