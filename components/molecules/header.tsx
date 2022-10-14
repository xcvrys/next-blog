import React from 'react';
import styled from 'styled-components'

const Head = styled.div`
  background-color: #ddaf94;
  width: 100vw;
  height: 11vh;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  border-radius: 0 0 1rem 1rem;
`;

import { BungeeFont } from '../atoms/bungeeFont';
export const Header = () => {
  return (
    <>
      <Head>
        <BungeeFont content="xcvrys blog" />
      </Head>
    </>
  );
};

