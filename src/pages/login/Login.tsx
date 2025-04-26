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
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send('eth_requestAccounts', []);
        if (accounts && accounts.length > 0) {
          login(accounts[0]);
          navigate('/products');
        } else {
          alert('계정이 선택되지 않았습니다. 메타마스크 팝업에서 계정을 선택해 주세요.');
        }
      } else {
        alert('메타마스크가 설치되어 있지 않습니다. 크롬 또는 파이어폭스 브라우저에서 메타마스크를 설치 후 이용해 주세요.');
      }
    } catch (error) {
      console.error(error);
      if (error && typeof error === 'object' && 'code' in error && (error as any).code === 4001) {
        // 4001: 사용자가 연결을 거부함
        alert('지갑 연결이 취소되었습니다. 메타마스크 팝업에서 연결을 허용해 주세요.');
      } else {
        alert(
          '지갑 연결에 실패했습니다. \n\n' +
          '1. 메타마스크가 설치되어 있고, 올바른 브라우저(크롬/파이어폭스)에서 실행 중인지 확인해 주세요.\n' +
          '2. 팝업 차단이 해제되어 있는지 확인해 주세요.\n' +
          '3. 네트워크 연결 상태를 확인해 주세요.' +
          (error && typeof error === 'object' && 'message' in error ? `\n상세: ${(error as any).message}` : '')
        );
      }
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