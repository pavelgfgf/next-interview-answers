'use client';
import styled from 'styled-components';
import Header from '../Header/Header';
import Main from '../Main/Main';

const Container = styled.div`
  height: 100vh;
`;

const Layout = () => {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
};

export default Layout;
