import React from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ethers } from 'ethers';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const LoginForm = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-width: 300px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin: 10px 0;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: inline-block;
  margin-top: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      // 로그인 처리 및 페이지 이동
      login();
      navigate('/products');
    } else {
      alert('메타마스크가 설치되어 있지 않습니다.');
    }
  };

  return (
    <LoginContainer>
      <LoginForm>
        <h1>Web3 로그인</h1>
        <Button onClick={handleLogin}>로그인</Button>
        <div>
          <p>아직 계정이 없으신가요?</p>
          <StyledLink to="/signin">회원가입</StyledLink>
        </div>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login; 