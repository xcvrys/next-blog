import React from 'react';
import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  width: 100%;
  padding: 5rem 0;
  flex-direction: column;
  font-family: "Podkova", serif;
  text-align: center;
  border-top: #222 2px solid;
  border-bottom: #222 2px solid;

  p {
    font-size: 1.5rem;
    padding: 0 3rem;
  }
  `;

import { BungeeFontQuotes } from '../atoms/bungeeFont';

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
