import styled from 'styled-components'

const Font = styled.div`
  font-family: "Bungee Shade", cursive;
  font-size: 1.5rem;
  color: #222222;
`;
const Quotes = styled.div`
  font-family: "Bungee Shade", cursive;
  font-size: 2rem;
  color: #222222;
`;
const Landing = styled.div`
  font-family: "Bungee Shade", cursive;
  font-size: 3rem;
  color: #222222;
  text-align: center;
`;

export const BungeeFont = ({ content }) => {
  return (
    <>
      <Font>
        <span>{content}</span>
      </Font>
    </>
  );
}

export const BungeeFontQuotes = ({ content }) => {
  return (
    <>
      <Quotes>
        <span>{content}</span>
      </Quotes>
    </>
  );
}

export const BungeeFontLanding = ({ content }) => {
  return (
    <>
      <Landing>
        <span>{content}</span>
      </Landing>
    </>
  );
}