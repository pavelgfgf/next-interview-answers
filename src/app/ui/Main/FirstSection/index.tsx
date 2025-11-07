'use client';

import { Button, Content, Section, SectionWrapper, Subtitle, Title } from './FirstSection.styled';

const FirstSection = () => {
  return (
    <Section>
      <SectionWrapper>
        <Content>
          <Title>Платформа для подготовки</Title>
          <Subtitle>к техническому собеседованию</Subtitle>
          <Button>Подготовиться</Button>
        </Content>
      </SectionWrapper>
    </Section>
  );
};

export default FirstSection;
