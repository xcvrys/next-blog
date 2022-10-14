import React from 'react';
import styled from 'styled-components'

const Head = styled.div`
  background-color: #ddaf94;
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  border-radius: 0 0 1rem 1rem;
  p {
    font-family: "Bungee Shade", cursive;
    font-size: 1.5rem;
  }
`;

export const Header = () => {
  return (
    <>
      <Head>
        <p>xcvrys Blog</p>
      </Head>
    </>
  );
};

