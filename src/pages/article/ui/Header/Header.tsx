'use client';

import Image from 'next/image';
import styled from 'styled-components';
import CustomLink from '@/src/shared/ui/CustomLink/CustomLink';

const HeaderMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 87%;
  position: fixed;
  padding-inline: 24px 24px;
  box-shadow: 0px 1px 2px 0px #0211251f;
  height: 56px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 1rem 0px 0px 150px;
  border-radius: 20px;
`;

const Title = styled.h1`
  font-weight: 800;
  line-height: 32px;
  font-size: 24px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const TextHeader = styled.p`
  font-weight: 400;
  line-height: 25px;
  font-size: 16px;
  color: #808080;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }
`;

const Logo = styled.div`
  padding-top: 13px;
`;

const Header = () => {
  return (
    <>
      <HeaderMenu>
        <CustomLink href="">
          <TitleWrapper>
            <Logo>
              <Image src="logo.svg" width={95} height={90} alt="logo"></Image>
            </Logo>
            <Title>ПрофИТ</Title>
          </TitleWrapper>
        </CustomLink>

        <LinkGroup>
          <CustomLink href="">
            <TextHeader>Тесты</TextHeader>
          </CustomLink>
          <CustomLink href="">
            <TextHeader>Тренажер вопросов</TextHeader>
          </CustomLink>
          <CustomLink href="">
            <TextHeader>Задачи</TextHeader>
          </CustomLink>
          <CustomLink href="">
            <TextHeader>Техническое собеседование</TextHeader>
          </CustomLink>
        </LinkGroup>
      </HeaderMenu>
    </>
  );
};

export default Header;
