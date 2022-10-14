import React from 'react';
import Link from 'next/link';
import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75vh;
  font-family: "Bungee Shade", cursive;
  padding: 2rem;
`;

const Content = styled.div`
  text-align: center;
  font-size: 3rem;
    span {
      position: relative;
      margin-left: 1rem;
    }
`;


export const Landing = () => {

  return (
    <>
      <Main>
        <Content>
          <p>Hi, I&apos;m
            <span>
              <Link href={'https://youtu.be/d1YBv2mWll0'}>
                <a target="_blank">XCVRYS</a>
              </Link>
            </span>
          </p>
          <p>Welcome to some random blog</p>
        </Content>
      </Main>
    </>
  );
};
