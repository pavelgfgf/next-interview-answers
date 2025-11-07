'use client';

import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import CustomLink from '@/src/shared/ui/CustomLink/CustomLink';

const HeaderMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  position: fixed;
  top: 2%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 24px;
  box-shadow: 0px 1px 2px 0px #0211251f;
  height: 56px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  z-index: 1000;

  @media (max-width: 1024px) {
    width: 95%;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (max-width: 480px) {
    flex-direction: row;
  }
`;

const Title = styled.h1`
  font-weight: 800;
  line-height: 32px;
  font-size: 24px;
`;

const Logo = styled.div`
  padding-top: 13px;
`;

const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    display: none;
  }
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

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Burger = styled.div<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  z-index: 1001;

  span {
    width: 25px;
    height: 3px;
    background-color: #333;
    border-radius: 2px;
    transition: all 0.3s ease;
    position: relative;
  }

  span:nth-child(1) {
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none')};
  }

  span:nth-child(2) {
    opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
  }

  span:nth-child(3) {
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none')};
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
    background-color: rgba(255, 255, 255, 0.95);
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    padding: 16px;
    border-radius: 20px 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 999;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <HeaderMenu>
        <CustomLink href="">
          <TitleWrapper>
            <Logo>
              <Image src="logo.svg" width={90} height={90} alt="logo" />
            </Logo>
            <Title>ПрофИТ</Title>
          </TitleWrapper>
        </CustomLink>

        <Burger $isOpen={isOpen} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </Burger>

        <MobileMenu $isOpen={isOpen}>
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
        </MobileMenu>

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
