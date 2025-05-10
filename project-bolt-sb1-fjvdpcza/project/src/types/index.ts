export interface Stage {
  id: number;
  title: string;
  quote?: string;
  quoteAuthor?: string;
  question: string;
  options: string[];
  bonus: {
    title: string;
    description: string;
  };
}

export interface UserProgress {
  currentStage: number;
  answers: (number | null)[];
  bonusesUnlocked: boolean[];
}