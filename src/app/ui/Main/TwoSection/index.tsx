'use client';

import {
  Card,
  CardDescription,
  CardGrid,
  CardImage,
  CardTitle,
  Section,
  Subtitle,
  Title,
  TryButton,
} from './TwoSection.styled';

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
    <Section>
      <Title>Повтори вопросы, которые тебе пригодятся на собеседовании</Title>
      <Subtitle>Быстро освежай знания через наши подборки вопросов</Subtitle>
      <CardGrid>
        {cards.map((card, index) => (
          <Card key={index}>
            <div>
              <CardTitle>
                {card.title}
                <CardImage src={card.image} width={40} height={40} alt={`Иконка ${card.title}`} />
              </CardTitle>
              {card.description && <CardDescription>{card.description}</CardDescription>}
            </div>
            <TryButton>Попробовать</TryButton>
          </Card>
        ))}
      </CardGrid>
    </Section>
  );
};

export default TwoSection;
