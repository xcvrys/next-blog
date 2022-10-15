import React, { Children, useState } from 'react';
import styled from 'styled-components'
import { BungeeFont } from '../atoms/bungeeFont';

const Head = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100vw;
  height: 11vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  border-radius: 0 0 1rem 1rem;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const Header = ({ children }) => {
  return (
    <>
      <Head>
        <BungeeFont content="xcvrys blog" />
        {children}
      </Head>
    </>
  );
};


