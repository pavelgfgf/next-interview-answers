'use client';

import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import CustomLink from '@/src/lib/CustomLink/CustomLink';

const HeaderMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 24px;
  box-shadow: 0px 1px 2px 0px #0211251f;
  height: 56px;
  z-index: 1000;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 0 12px;
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
  padding-right: 32px;
`;

const Logo = styled.div`
  padding-top: 13px;
`;

const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  /* Запрещаем перенос текста */
  white-space: nowrap;

  @media (max-width: 768px) {
    display: none; /* Скрываем на мобильных */
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

const LoginButton = styled.button`
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bbd;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const LoginButtonMobile = styled(LoginButton)`
  display: none;

  @media (max-width: 768px) {
    display: block; /* Показываем только на мобильных */
    margin-left: 12px;
    margin-right: 8px;
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

    /* Запрещаем перенос текста в мобильном меню */
    > * {
      white-space: nowrap;
    }
  }
`;

// Контейнер для кнопки "Войти", который всегда виден

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <HeaderMenu>
        <CustomLink href="/">
          <TitleWrapper>
            <Logo>
              <Image src="/logo.svg" width={90} height={90} alt="logo" />
            </Logo>
            <Title>ПрофИТ</Title>
          </TitleWrapper>
        </CustomLink>

        <LoginButtonMobile>Войти</LoginButtonMobile>

        <Burger $isOpen={isOpen} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </Burger>

        {/* Мобильное меню — без кнопки "Войти" */}
        <MobileMenu $isOpen={isOpen}>
          <CustomLink href="/question">
            <TextHeader>База вопросов</TextHeader>
          </CustomLink>
          <CustomLink href="/tasks">
            <TextHeader>Задачи</TextHeader>
          </CustomLink>
          <CustomLink href="/interview">
            <TextHeader>Техническое собеседование</TextHeader>
          </CustomLink>
        </MobileMenu>

        {/* Группа ссылок — только на десктопе */}
        <LinkGroup>
          <CustomLink href="/question">
            <TextHeader>База вопросов</TextHeader>
          </CustomLink>
          <CustomLink href="/tasks">
            <TextHeader>Задачи</TextHeader>
          </CustomLink>
          <CustomLink href="/interview">
            <TextHeader>Техническое собеседование</TextHeader>
          </CustomLink>
          <CustomLink href="/auth/login">
            <LoginButton>Войти</LoginButton>
          </CustomLink>
        </LinkGroup>
      </HeaderMenu>
    </>
  );
};

export default Header;
