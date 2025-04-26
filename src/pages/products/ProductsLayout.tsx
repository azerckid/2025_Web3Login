import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
`;

const ProductsLayout = () => (
    <LayoutContainer>
        {/* 공통 헤더/타이틀/배경 등 추가 가능 */}
        <Outlet />
    </LayoutContainer>
);

export default ProductsLayout; 