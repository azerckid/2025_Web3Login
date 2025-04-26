import React from 'react';
import styled from 'styled-components';

const ProductsContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
`;

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProductItem = styled.li`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

const dummyProducts = [
    { id: 1, name: '제품 1', description: '이것은 제품 1입니다.' },
    { id: 2, name: '제품 2', description: '이것은 제품 2입니다.' },
    { id: 3, name: '제품 3', description: '이것은 제품 3입니다.' },
];

function Products() {
    return (
        <ProductsContainer>
            <Title>제품 목록</Title>
            <ProductList>
                {dummyProducts.map(product => (
                    <ProductItem key={product.id}>
                        <strong>{product.name}</strong>
                        <div>{product.description}</div>
                    </ProductItem>
                ))}
            </ProductList>
        </ProductsContainer>
    );
}

export default Products; 