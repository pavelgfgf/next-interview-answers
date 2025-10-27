'use client';

import Image from 'next/image';
import styled from 'styled-components';

const Section = styled.section`
  height: 700px;
  background-color: #f5f5f5;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #222;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #555;
  max-width: 600px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1100px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #444;
  margin-bottom: 1.5rem;
`;

const TryButton = styled.button`
  align-self: flex-start;
  background-color: #005bb5;
  color: white;
  border: none;
  padding: 10px 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007cf0;
  }
`;

const TwoSection = () => {
  const cards = [
    { title: 'Python', description: 'Проверь свои знания Python', image: '/python.svg' },
    { title: 'Java', description: 'Узнай, на сколько ты хорош в знании Java', image: '/java.svg' },
    { title: 'Frontend', description: 'Проверь свои знания frontend', image: '/frontend.svg' },
    { title: 'C#', description: 'Проверь свои знания C#', image: '/csharp.svg' },
    { title: 'C++', description: 'Проверь свои знания C++', image: '/cpp.svg' },
    { title: 'Git', description: 'Проверь свои знания Git', image: '/git.svg' },
  ];

  return (
    <>
      <Section>
        <Title>Повтори вопросы, которые тебе пригодятся на собеседовании</Title>
        <Subtitle>Быстро освежай знания через наши подборки вопросов</Subtitle>
        <CardGrid>
          {cards.map((card, index) => (
            <Card key={index}>
              <div>
                <CardTitle>
                  {card.title}
                  <Image src={card.image} width={40} height={40} alt="картинка" />
                </CardTitle>
                {card.description && <CardDescription>{card.description}</CardDescription>}
              </div>
              <TryButton>Попробовать</TryButton>
            </Card>
          ))}
        </CardGrid>
      </Section>
    </>
  );
};

export default TwoSection;
