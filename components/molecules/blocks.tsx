import React from 'react';
import { BlocksContent } from '../atoms/blocksContent';
import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 5rem 0;
  gap: 3rem;
  font-family: "Podkova", serif;
`;

const Content = styled.div`
  width: 17.5rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  text-align: center;
  margin: 0.75rem;
  
  h4 {
    width: 80%;
    margin: auto;
  }

  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.blocksOdd};
    color: ${({ theme }) => theme.colors.blocksEven};
  }
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.blocksEven};
    color: ${({ theme }) => theme.colors.blocksOdd};
  }
`;

export const Blocks = () => {

  return (
    <>
      <Main>
        <Content>
          <BlocksContent
            title='HI'
            content='Lorem ipsum dolor sit amet. Cum animi placeat qui corporis quia sit officia voluptas ex dolorem sequi cum nihil eligendi. Et mollitia alias id dolorem nihil in fugiat dolorum sit cumque consequatur quo dolor quia. '
          />
        </Content>
        <Content>
          <BlocksContent
            title='I&apos;M'
            content='There&apos;s Nothing here YEET '
          />
        </Content>
        <Content>
          <BlocksContent
            title='XCVRYS'
            content='Ex dolorem aperiam qui quaerat earum aut magni dolorum qui officia.'
          />
        </Content>
      </Main>
    </>
  );
};
