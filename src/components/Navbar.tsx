import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const NavContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const ThemeToggle = styled.button`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

const Navbar = () => {
    const { toggleTheme } = useThemeContext();
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <NavContainer>
            <Logo to="/">Web3 App</Logo>
            <NavLinks>
                {isAuthenticated ? (
                    <>
                        <NavLink to="/products">제품 목록</NavLink>
                        <Button onClick={handleLogout}>로그아웃</Button>
                    </>
                ) : (
                    <>
                        <NavLink to="/">로그인</NavLink>
                        <NavLink to="/signin">회원가입</NavLink>
                    </>
                )}
                <ThemeToggle onClick={toggleTheme}>테마 변경</ThemeToggle>
            </NavLinks>
        </NavContainer>
    );
};

export default Navbar; 