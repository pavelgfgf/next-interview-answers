// src/app/login/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f7fa;
  padding: 20px;
`;

const FormCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 32px;
  width: 100%;
  max-width: 400px;

  h2 {
    margin-bottom: 24px;
    font-size: 24px;
    color: #333;
    text-align: center;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 16px;

  label {
    display: block;
    margin-bottom: 6px;
    font-size: 14px;
    color: #666;
  }

  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;

    &:focus {
      outline: none;
      border-color: #0070f3;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bbd;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 8px;
`;

const LinkToRegister = styled.p`
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
  color: #666;

  a {
    color: #0070f3;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Пожалуйста, заполните все поля');
      return;
    }

    // Валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Введите корректный email');
      return;
    }

    setLoading(true);

    // Здесь будет API-запрос на авторизацию
    // await loginAPI({ email, password });

    // Заглушка для демонстрации
    setTimeout(() => {
      console.log('Login attempt:', { email, password });
      alert('Вход выполнен');
      setLoading(false);
    }, 1000);
  };

  return (
    <Container>
      <FormCard>
        <h2>Войти в аккаунт</h2>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите email"
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="password">Пароль</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
            />
          </InputGroup>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <Button type="submit" disabled={loading}>
            {loading ? 'Вход...' : 'Войти'}
          </Button>
        </form>

        <LinkToRegister>
          Нет аккаунта? <Link href="/auth/register">Зарегистрироваться</Link>
        </LinkToRegister>
        <LinkToRegister>
          <Link href="/">Вернуться назад</Link>
        </LinkToRegister>
      </FormCard>
    </Container>
  );
}
