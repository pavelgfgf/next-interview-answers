'use client';

import styled from 'styled-components';

const MainPage = styled.div`
  max-width: 1920px;
  min-height: 100vh;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const PreparationSection = styled.div`
  background: linear-gradient(135deg, #3634a2 0%, #3da02e 100%);
  color: white;
  width: 1400px;
  height: 555px;
  padding: 80px 20px;
  border-radius: 67px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 30px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 600px;
  width: 100%;
`;

const Button = styled.button`
  font-size: 24px;
  margin-bottom: 20px;
  padding: 10px 20px;
  background: rgba(23, 155, 58, 0.5);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: #fff;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 300px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(23, 155, 58, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    background: rgba(183, 210, 103, 0.5);
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

    &:before {
      left: 100%;
    }
  }
`;

const ListItem = styled.li`
  font-size: 1.4rem;
  margin-bottom: 20px;
  padding: 20px 30px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

    &:before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 18px 24px;
  }
`;
const Main = () => {
  return (
    <>
      <MainPage>
        <PreparationSection>
          <Title>Платформа для подготовки</Title>
          <List>
            <ListItem>к техническому собеседованию</ListItem>
            <ListItem>Подготовиться</ListItem>
          </List>
        </PreparationSection>
      </MainPage>
    </>
  );
};

export default Main;





