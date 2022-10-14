import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components'

const Main = styled.div`
  font-family: "Bungee Shade", cursive;
  font-size: 1.75rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  height: 6rem;
`;

export const Back = () => {
  const router = useRouter();

  return (
    <>
      <Main>
        <div onClick={() => router.back()} >
          <p>&lt; back</p>
        </div>
        <div onClick={() => router.push('/')} >
          <p>&lt; home</p>
        </div>
      </Main>
    </>
  );
};
