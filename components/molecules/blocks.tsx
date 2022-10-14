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
  
  h4 {
    width: 80%;
    margin: auto;
  }

  &:nth-child(odd) {
    background-color: #266150;
    color: #ddaf94;
  }
  &:nth-child(even) {
    background-color: #ddaf94;
    color: #266150;
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
