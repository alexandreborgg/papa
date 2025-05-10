import React from 'react';
import { Gift } from 'lucide-react';

interface BonusCardProps {
  title: string;
  description: string;
  visible: boolean;
}

const BonusCard: React.FC<BonusCardProps> = ({ title, description, visible }) => {
  if (!visible) return null;
  
  return (
    <div className="mt-8 bg-gradient-to-r from-yellow-50 to-yellow-100 p-5 rounded-lg border border-yellow-200 shadow-md animate-fade-in">
      <div className="flex items-center mb-3">
        <Gift className="text-yellow-500 w-6 h-6 mr-2" />
        <h3 className="text-lg font-medium text-yellow-800">Bônus Desbloqueado!</h3>
      </div>
      <h4 className="text-yellow-900 font-medium mb-2">{title}</h4>
      <p className="text-yellow-700">{description}</p>
    </div>
  );
};

export default BonusCard;