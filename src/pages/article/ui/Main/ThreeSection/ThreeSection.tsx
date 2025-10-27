import { useState } from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 700px;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const QuizContainer = styled.div`
  background: rgba(27, 188, 180, 0.3);
  border-radius: 12px;
  padding: 24px;
  margin: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: none;
  width: 600px;
  height: 400px;
  display: flex;
  justify-content: center;
`;

const QuizTitle = styled.h2`
  color: #2d3748;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
  line-height: 1.4;
`;

const QuestionContainer = styled.div`
  margin-bottom: 24px;
  background-color: rgba(245, 245, 245, 0.2);
  padding: 30px;
  border-radius: 15px;
  width: 510px;
  height: 320px;
`;

const QuestionText = styled.p`
  color: #000000;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 15px;
  line-height: 1.6;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const OptionLabel = styled.label<{
  $isChecked?: boolean;
  $isRightAnswer?: boolean;
  $showResult?: boolean;
  $isDisabled?: boolean;
}>`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background: ${(props) => {
    // Если показываем результат и это правильный ответ
    if (props.$showResult && props.$isRightAnswer) return '#15b039';
    // Если показываем результат, это выбранный ответ, но он неправильный
    if (props.$showResult && props.$isChecked && !props.$isRightAnswer) return '#c91726';
    // Обычное состояние
    return 'rgba(245, 245, 245, 0.7)';
  }};
  border: none;
  border-radius: 8px;
  cursor: ${(props) => (props.$isDisabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;
`;

const OptionCheckbox = styled.input`
  margin-right: 12px;
  width: 16px;
  height: 16px;
  cursor: pointer;

  &:disabled {
    opacity: 1;
  }

  &:disabled:checked {
    accent-color: #3b82f6;
  }

  &:checked {
    accent-color: #3b82f6;
  }
`;

export const OptionText = styled.span`
  color: #2d3748;
  font-size: 1rem;
  font-weight: 400;
`;

const CheckButton = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 15px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #2563eb;
  }

  &:active {
    background: #1d4ed8;
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }
`;

const ThreeSection = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  const handleCheckAnswer = () => {
    setShowResult(true);
    setAnswerSubmitted(true);
  };

  const correctAnswer = 'Number';

  return (
    <>
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
                  $isDisabled={answerSubmitted && option !== selectedOption}
                >
                  <OptionCheckbox
                    type="checkbox"
                    name="quiz-option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    disabled={answerSubmitted}
                  />
                  <OptionText>{option}</OptionText>
                </OptionLabel>
              ))}
            </OptionsContainer>
            <CheckButton onClick={handleCheckAnswer} disabled={!selectedOption || answerSubmitted}>
              Проверить
            </CheckButton>
          </QuestionContainer>
        </QuizContainer>
      </Section>
    </>
  );
};

export default ThreeSection;
