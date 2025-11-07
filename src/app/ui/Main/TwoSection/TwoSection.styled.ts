import Image from 'next/image';
import styled from 'styled-components';

export const Section = styled.section`
  min-height: 700px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    min-height: auto;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #222;
  line-height: 1.3;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 0.6rem;
    padding: 0 0.5rem;
  }

  @media (max-width: 360px) {
    font-size: 1.3rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #555;
  max-width: 600px;
  line-height: 1.5;
  padding: 0 1rem;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    padding: 0 0.5rem;
  }

  @media (max-width: 360px) {
    font-size: 0.9rem;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1100px;
  padding: 0 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.25rem;
    max-width: 900px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    padding: 0 0.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.875rem;
    max-width: 400px;
    padding: 0 0.25rem;
  }

  @media (max-width: 360px) {
    gap: 0.75rem;
  }
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  min-height: 180px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    min-height: 160px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    min-height: 150px;
    border-radius: 8px;
  }

  @media (max-width: 360px) {
    padding: 0.875rem;
    min-height: 140px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }

  @media (max-width: 360px) {
    font-size: 1rem;
  }
`;

export const CardImage = styled(Image)`
  width: 40px;
  height: 40px;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 360px) {
    width: 28px;
    height: 28px;
  }
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #444;
  margin-bottom: 1.5rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 360px) {
    font-size: 0.85rem;
    margin-bottom: 0.875rem;
  }
`;

export const TryButton = styled.button`
  align-self: flex-start;
  background-color: #005bb5;
  color: white;
  border: none;
  padding: 10px 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  min-height: 44px;
  font-weight: 500;

  &:hover {
    background-color: #007cf0;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 8px 0.875rem;
    font-size: 0.95rem;
    min-height: 42px;
    border-radius: 6px;
  }

  @media (max-width: 480px) {
    padding: 8px 0.75rem;
    font-size: 0.9rem;
    min-height: 40px;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 360px) {
    padding: 7px 0.625rem;
    font-size: 1rem;
    min-height: 38px;
  }
`;
