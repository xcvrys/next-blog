import React from 'react';
import Link from 'next/link';
import styled from 'styled-components'
import { BungeeFontLanding } from '../atoms/bungeeFont';

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 75vh;
  font-family: "Bungee Shade";
  padding: 2rem;
  color: ${({ theme }) => theme.colors.primaryText};
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
`;

export const Landing = () => {

  return (
    <>
      <Main>
        <Wrap>
          <BungeeFontLanding content="Hi, I&apos;m" />
          <Link href={'https://youtu.be/d1YBv2mWll0'}>
            <a target="_blank">
              <BungeeFontLanding content="xcvrys" />
            </a>
          </Link>
        </Wrap>
        <BungeeFontLanding content="Welcome to some random blog" />
      </Main>
    </>
  );
};
