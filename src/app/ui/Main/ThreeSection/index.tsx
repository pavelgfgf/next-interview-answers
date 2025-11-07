'use client';

import { useState } from 'react';
import {
  CheckButton,
  OptionCheckbox,
  OptionLabel,
  OptionsContainer,
  OptionText,
  QuestionContainer,
  QuestionText,
  QuizContainer,
  QuizTitle,
  Section,
} from './ThreeSection.styled';

const ThreeSection = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  const handleCheckAnswer = () => {
    setShowResult(true);
    setAnswerSubmitted(true);
  };

  const handleOptionSelect = (option: string) => {
    if (!answerSubmitted) {
      setSelectedOption(option);
    }
  };

  const correctAnswer = 'Number';

  return (
    <Section>
      <QuizTitle>Проверяй свои знания, отвечая на базовые вопросы</QuizTitle>
      <QuizContainer>
        <QuestionContainer>
          <QuestionText>Какой результат вернет typeof NaN?</QuestionText>

          <OptionsContainer>
            {['ReferenceError', 'Number', 'Object', 'NaN'].map((option) => (
              <OptionLabel
                key={option}
                $isChecked={option === selectedOption}
                $isRightAnswer={option === correctAnswer}
                $showResult={showResult}
                $isDisabled={answerSubmitted}
              >
                <OptionCheckbox
                  type="checkbox"
                  name="quiz-option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionSelect(option)}
                  disabled={answerSubmitted}
                />
                <OptionText>{option}</OptionText>
              </OptionLabel>
            ))}
          </OptionsContainer>

          <div>
            <CheckButton onClick={handleCheckAnswer} disabled={!selectedOption || answerSubmitted}>
              Проверить
            </CheckButton>
          </div>
        </QuestionContainer>
      </QuizContainer>
    </Section>
  );
};

export default ThreeSection;
