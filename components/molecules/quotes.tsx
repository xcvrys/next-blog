import React from 'react';
import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
  flex-direction: column;
  font-family: "Podkova", serif;
  text-align: center;
  border-top: #222 2px solid;
  border-bottom: #222 2px solid;

  p {
    font-size: 1.5rem;
    line-height: 2rem;
    padding: 0 3rem;

    &:first-of-type {
      font-family: "Bungee Shade", cursive;
      font-size: 2rem;
    }
  }
  `;


export const Quotes = () => {

  return (
    <>
      <Main>
        <p>REMEMBER</p>
        <p>If you think you are too small to make a difference, try sleeping with a mosquito.</p>
        <p> -Dalai Lama</p>
      </Main>
    </>
  );
};
