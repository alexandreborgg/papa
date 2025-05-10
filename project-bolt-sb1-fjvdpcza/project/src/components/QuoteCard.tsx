import React from 'react';

interface QuoteCardProps {
  quote: string;
  author: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, author }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-md border border-blue-100 mb-8">
      <div className="text-5xl text-blue-200 font-serif leading-none mb-4">"</div>
      <p className="text-lg md:text-xl text-blue-900 font-serif italic mb-4">{quote}</p>
      <p className="text-right text-blue-700 font-medium">— {author}</p>
    </div>
  );
};

export default QuoteCard;