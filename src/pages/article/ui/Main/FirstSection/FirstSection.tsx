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

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1110px;
  height: 500px;
  background: rgba(2, 36, 102, 0.884);
  border-radius: 50px;
  color: white;
  text-align: center;
  box-shadow: 12px 8px 10px rgba(0, 0, 0, 0.3);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 52px;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 5em;
  color: #ccc;
`;

const Button = styled.button`
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

  &:before {
    content: '';
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
`;

const FirstSection = () => {
  return (
    <>
      <Section>
        <SectionWrapper>
          <Content>
            <Title>Платформа для подготовки</Title>
            <Subtitle>к техническому собеседованию</Subtitle>
            <Button>Подготовиться</Button>
          </Content>
        </SectionWrapper>
      </Section>
    </>
  );
};

export default FirstSection;
