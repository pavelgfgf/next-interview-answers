import styled from 'styled-components';

export const Section = styled.div`
  height: 90vh;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 20px 15px;
    min-height: 70vh;
  }

  @media (max-width: 480px) {
    padding: 15px 10px;
    min-height: 70vh;
  }
`;

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1110px;
  height: auto;
  min-height: 500px;
  background: rgba(2, 36, 102, 0.884);
  border-radius: 50px;
  color: white;
  text-align: center;
  box-shadow: 12px 8px 10px rgba(0, 0, 0, 0.3);
  padding: 40px 20px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    max-width: 900px;
    border-radius: 40px;
    padding: 30px 20px;
  }

  @media (max-width: 768px) {
    max-width: 95%;
    border-radius: 30px;
    padding: 25px 15px;
    min-height: 400px;
  }

  @media (max-width: 480px) {
    border-radius: 20px;
    padding: 20px 10px;
    min-height: 350px;
    box-shadow: 8px 5px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  max-width: 800px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 95%;
  }
`;

export const Title = styled.h1`
  font-size: 52px;
  margin-bottom: 1rem;
  line-height: 1.2;
  font-weight: 700;

  @media (max-width: 1200px) {
    font-size: 46px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 360px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 5em;
  color: #ccc;
  line-height: 1.4;

  @media (max-width: 1200px) {
    font-size: 1.4rem;
    margin-bottom: 4em;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 3em;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 2.5em;
    padding: 0 10px;
  }

  @media (max-width: 360px) {
    font-size: 1rem;
    margin-bottom: 2em;
  }
`;

export const Button = styled.button`
  font-size: 24px;
  margin-bottom: 20px;
  padding: 10px 20px;
  background: rgba(163, 230, 53, 0.8);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: #fff;
  cursor: pointer;
  overflow: hidden;
  width: 300px;
  height: 50px;
  position: relative;
  font-weight: 600;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(23, 155, 58, 0.5), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    background: rgba(140, 197, 42, 0.8);
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

    &:before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 20px;
    width: 280px;
    height: 48px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    width: 250px;
    height: 45px;
    border-radius: 12px;
    margin-bottom: 15px;
  }

  @media (max-width: 360px) {
    font-size: 16px;
    width: 220px;
    height: 42px;
    padding: 8px 16px;
  }
`;
