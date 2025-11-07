import styled from 'styled-components';

export const Section = styled.section`
  min-height: 700px;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 30px 15px;
    min-height: 80vh;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
    min-height: 70vh;
  }
`;

export const QuizContainer = styled.article`
  background: rgba(27, 188, 180, 0.3);
  border-radius: 12px;
  padding: 24px;
  margin: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: none;
  width: 100%;
  max-width: 600px;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 20px;
    min-height: 350px;
    margin: 15px 0;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    padding: 16px;
    min-height: 300px;
    margin: 10px 0;
    border-radius: 10px;
  }
`;

export const QuizTitle = styled.h2`
  color: #000000ff;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
  line-height: 1.4;
  padding: 0 20px;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 15px;
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 12px;
    padding: 0 10px;
    line-height: 1.3;
  }

  @media (max-width: 360px) {
    font-size: 1.3rem;
  }
`;

export const QuestionContainer = styled.div`
  background-color: rgba(245, 245, 245, 0.2);
  padding: 30px;
  border-radius: 15px;
  width: 100%;
  max-width: 510px;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 100%;
    min-height: 280px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    min-height: 250px;
    border-radius: 10px;
  }
`;

export const QuestionText = styled.p`
  color: #000000;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 15px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 12px;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 10px;
    line-height: 1.4;
  }

  @media (max-width: 360px) {
    font-size: 16px;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    gap: 8px;
    margin-bottom: 12px;
  }
`;

export const OptionLabel = styled.label<{
  $isChecked?: boolean;
  $isRightAnswer?: boolean;
  $showResult?: boolean;
  $isDisabled?: boolean;
}>`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: ${(props) => {
    if (props.$showResult && props.$isRightAnswer) return '#15b039';
    if (props.$showResult && props.$isChecked && !props.$isRightAnswer) return '#c91726';
    return 'rgba(245, 245, 245, 0.7)';
  }};
  border: none;
  border-radius: 8px;
  cursor: ${(props) => (props.$isDisabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;
  min-height: 44px;

  @media (max-width: 480px) {
    padding: 10px 12px;
    min-height: 40px;
    border-radius: 6px;
  }

  @media (max-width: 360px) {
    padding: 8px 10px;
    min-height: 36px;
  }
`;

export const OptionCheckbox = styled.input`
  margin-right: 12px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  flex-shrink: 0;

  &:disabled {
    opacity: 1;
  }

  &:disabled:checked {
    accent-color: #3b82f6;
  }

  &:checked {
    accent-color: #3b82f6;
  }

  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }

  @media (max-width: 360px) {
    width: 14px;
    height: 14px;
    margin-right: 8px;
  }
`;

export const OptionText = styled.span`
  color: #2d3748;
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }

  @media (max-width: 360px) {
    font-size: 0.85rem;
  }
`;

export const CheckButton = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 14px 28px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 48px;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;

  &:hover:not(:disabled) {
    background: #2563eb;
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    background: #1d4ed8;
    transform: translateY(0);
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 1rem;
    min-height: 44px;
    max-width: 180px;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 0.95rem;
    min-height: 42px;
    max-width: 160px;
    border-radius: 6px;
  }
`;
