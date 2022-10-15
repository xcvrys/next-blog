import React from 'react';
import styled from 'styled-components'
import { BungeeFontQuotes } from '../atoms/bungeeFont';

const Main = styled.div`
  display: flex;
  width: 100%;
  padding: 5rem 0;
  flex-direction: column;
  font-family: "Podkova", serif;
  text-align: center;
  border-top: ${({ theme }) => theme.colors.primaryText} 2px solid;
  border-bottom: ${({ theme }) => theme.colors.primaryText} 2px solid;
  color: ${({ theme }) => theme.colors.primaryText};

  p {
    font-size: 1.5rem;
    padding: 0 3rem;
  }
`;


export const Quotes = () => {

  return (
    <>
      <Main>
        <BungeeFontQuotes content="Remember" />
        <p>If you think you are too small to make a difference, try sleeping with a mosquito.</p>
        <p> -Dalai Lama</p>
      </Main>
    </>
  );
};
