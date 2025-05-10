import React, { useState } from 'react';
import Layout from './components/Layout';
import WelcomeScreen from './components/WelcomeScreen';
import ProgressBar from './components/ProgressBar';
import JourneyStage from './components/JourneyStage';
import Navigation from './components/Navigation';
import { stageData } from './data/stageData';
import { UserProgress } from './types';

function App() {
  const [journeyStarted, setJourneyStarted] = useState(false);
  const [userProgress, setUserProgress] = useState<UserProgress>({
    currentStage: 1,
    answers: Array(stageData.length).fill(null),
    bonusesUnlocked: Array(stageData.length).fill(false)
  });

  const handleStartJourney = () => {
    setJourneyStarted(true);
  };

  const handleSelectOption = (optionIndex: number) => {
    const newAnswers = [...userProgress.answers];
    newAnswers[userProgress.currentStage - 1] = optionIndex;
    
    const newBonusesUnlocked = [...userProgress.bonusesUnlocked];
    newBonusesUnlocked[userProgress.currentStage - 1] = true;
    
    setUserProgress({
      ...userProgress,
      answers: newAnswers,
      bonusesUnlocked: newBonusesUnlocked
    });
  };

  const handlePreviousStage = () => {
    if (userProgress.currentStage > 1) {
      setUserProgress({
        ...userProgress,
        currentStage: userProgress.currentStage - 1
      });
    }
  };

  const handleNextStage = () => {
    if (userProgress.currentStage < stageData.length) {
      setUserProgress({
        ...userProgress,
        currentStage: userProgress.currentStage + 1
      });
      
      // Scroll to top when changing stages
      window.scrollTo(0, 0);
    }
  };

  const currentStageIndex = userProgress.currentStage - 1;
  const currentStage = stageData[currentStageIndex];
  const selectedOption = userProgress.answers[currentStageIndex];
  const bonusUnlocked = userProgress.bonusesUnlocked[currentStageIndex];
  const canAdvance = selectedOption !== null;
  const isFinalStage = userProgress.currentStage === stageData.length;

  return (
    <Layout>
      {!journeyStarted ? (
        <WelcomeScreen onStart={handleStartJourney} />
      ) : (
        <>
          <ProgressBar 
            currentStage={userProgress.currentStage} 
            totalStages={stageData.length} 
          />
          
          <JourneyStage 
            stage={currentStage}
            selectedOption={selectedOption}
            onSelectOption={handleSelectOption}
            bonusUnlocked={bonusUnlocked}
            isFinalStage={isFinalStage}
          />
          
          <Navigation 
            currentStage={userProgress.currentStage}
            totalStages={stageData.length}
            canAdvance={canAdvance}
            onPrevious={handlePreviousStage}
            onNext={handleNextStage}
          />
        </>
      )}
    </Layout>
  );
}

export default App;