import { FooterContent } from '../atoms/footerContent';
import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 3rem 0;
  background-color: #ddaf94;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  font-family: "Bungee Shade", cursive;
  font-size: 1.5rem;
`;

const Copyright = styled.div`
  color: #e8cebf;
  font-family: "Podkova", serif;
`;

export const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();


  return (
    <>
      <Main>
        <Content>
          <FooterContent link={'https://twitter.com/xcvrys'} content={'Twitter'} />
          <FooterContent link={'https://github.com/xcvrys'} content={'Github'} />
          <FooterContent link={'https://www.linkedin.com/in/kamil-r-486147253/'} content={'LinkedIn'} />
          <FooterContent link={'https://www.instagram.com/xcvrys_/'} content={'Instagram'} />
        </Content>
        <Copyright>
          <p>© {year} XCVRYS</p>
        </Copyright>
      </Main>
    </>
  );
};
