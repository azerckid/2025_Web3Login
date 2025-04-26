import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
`;

const SignInLayout = () => (
    <LayoutContainer>
        {/* 공통 헤더/로고/배경 등 추가 가능 */}
        <Outlet />
    </LayoutContainer>
);

export default SignInLayout; 