'use client';

import Image from 'next/image';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f5f5f5;
  padding: 16px;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

const FooterContent = styled.div`
  margin: 0 auto;
  background: rgba(2, 36, 102, 0.884);
  padding: 20px;
  border-radius: 24px;

  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    border-radius: 16px;
  }
`;

const FooterHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    margin-bottom: 16px;
    padding-bottom: 16px;
  }

  @media (max-width: 480px) {
    margin-bottom: 12px;
    padding-bottom: 12px;
    gap: 12px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .logo-text {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
  }

  @media (max-width: 768px) {
    .logo-text {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    gap: 8px;

    .logo-text {
      font-size: 18px;
    }
  }
`;

const LogoImage = styled(Image)`
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

const SectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin: 20px 40px;

  @media (max-width: 1024px) {
    margin: 20px 30px;
    gap: 30px;
  }

  @media (max-width: 768px) {
    margin: 15px 20px;
    gap: 25px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    margin: 15px;
    gap: 20px;
  }

  @media (max-width: 480px) {
    margin: 10px;
    gap: 15px;
  }
`;

const Section = styled.div`
  h3 {
    color: #fff;
    margin: 20px 0;
    font-size: 18px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    h3 {
      margin: 16px 0;
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    h3 {
      margin: 12px 0;
      font-size: 16px;
    }
  }
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 12px;

    @media (max-width: 768px) {
      margin-bottom: 10px;
    }

    @media (max-width: 480px) {
      margin-bottom: 8px;
    }
  }

  a {
    color: #cacaca;
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: 14px;
    display: block;

    &:hover {
      color: #0070f3;
      transform: translateX(5px);
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
      padding: 4px 0;
    }
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    padding-top: 16px;
    gap: 16px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    gap: 12px;
    padding-top: 12px;
  }
`;

const Copyright = styled.p`
  color: #ccc;
  margin: 0;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    order: 2;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 600px) {
    order: 1;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
  }

  a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: 14px;
    white-space: nowrap;

    &:hover {
      color: #0070f3;
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterHeader>
          <Logo>
            <LogoImage src="/logo.svg" width={90} height={90} alt="Логотип Профит" />
            <h2 className="logo-text">Профит</h2>
          </Logo>
        </FooterHeader>

        <SectionsGrid>
          <Section>
            <h3>О компании</h3>
            <LinksList>
              <li>
                <a href="#">О нас</a>
              </li>
              <li>
                <a href="#">Команда</a>
              </li>
              <li>
                <a href="#">Войти</a>
              </li>
              <li>
                <a href="#">Вакансии</a>
              </li>
            </LinksList>
          </Section>

          <Section>
            <h3>Обучение</h3>
            <LinksList>
              <li>
                <a href="/tasts">Задачи</a>
              </li>
              <li>
                <a href="/question">База вопросов</a>
              </li>
              <li>
                <a href="/interview">Техническое собеседование</a>
              </li>
            </LinksList>
          </Section>

          <Section>
            <h3>Техническая поддержка</h3>
            <LinksList>
              <li>
                <a href="/help">Обратная связь</a>
              </li>
              <li>
                <a href="/docs">Документация</a>
              </li>
              <li>
                <a href="/contact">Контакты</a>
              </li>
              <li>
                <a href="/status">Статус системы</a>
              </li>
            </LinksList>
          </Section>
        </SectionsGrid>

        <BottomBar>
          <Copyright>© {new Date().getFullYear()} ПрофИТ by pavelgfgf. Все права защищены. </Copyright>
          <LegalLinks>
            <a href="/privacy">Политика конфиденциальности</a>
            <a href="/terms">Условия использования</a>
          </LegalLinks>
        </BottomBar>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
