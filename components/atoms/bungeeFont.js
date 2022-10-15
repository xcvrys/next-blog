import styled from 'styled-components'

const Font = styled.div`
  font-family: "Bungee Shade";
  text-align: center;
  font-size: ${props => props.size};
`;

export const BungeeFont = ({ content }) => {
  return (
    <>
      <Font size="1.5rem" >
        <span>{content} </span>
      </Font>
    </>
  );
}

export const BungeeFontQuotes = ({ content }) => {
  return (
    <>
      <Font size="2rem">
        <span>{content} </span>
      </Font>
    </>
  );
}

export const BungeeFontLanding = ({ content }) => {
  return (
    <>
      <Font size="3rem" >
        <span>{content} </span>
      </Font>
    </>
  );
}