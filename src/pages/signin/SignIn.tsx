import React from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const SignInForm = styled.div`
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

function SignIn() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = () => {
    login();
    navigate('/products');
  };

  return (
    <SignInContainer>
      <SignInForm>
        <h1>회원가입</h1>
        <Button onClick={handleSignIn}>회원가입</Button>
        <div>
          <p>이미 계정이 있으신가요?</p>
          <StyledLink to="/">로그인</StyledLink>
        </div>
      </SignInForm>
    </SignInContainer>
  );
}

export default SignIn; 