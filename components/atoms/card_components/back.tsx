import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components'
import { BungeeFont } from '../bungeeFont';

const Main = styled.div`
  display: flex;
  gap: 2rem;
`;

const Cursor = styled.div`
  cursor: pointer;
`;

export const Back = () => {
  const router = useRouter();

  return (
    <>
      <Main>
        <Cursor onClick={() => router.back()} >
          <BungeeFont content="&lt; back" />
        </Cursor>
        <Cursor onClick={() => router.push('/')} >
          <BungeeFont content="&lt; home" />
        </Cursor>
      </Main>
    </>
  );
};
