'use client';

import styled from 'styled-components';
import FirstSection from './FirstSection/FirstSection';
import ThreeSection from './ThreeSection/ThreeSection';
import TwoSection from './TwoSection/TwoSection';

const MainPage = styled.div`
  height: 200vh;
`;

const Main = () => {
  return (
    <>
      <MainPage>
        <FirstSection />
        <TwoSection />
        <ThreeSection />
      </MainPage>
    </>
  );
};

export default Main;
