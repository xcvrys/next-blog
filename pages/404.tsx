// import style from '../styles/css/404.module.css';
import { useRouter } from 'next/router';
import styled from 'styled-components'

const BackButton = styled.div`
  cursor: pointer;
  padding: 1rem;
  border: ${({ theme }) => theme.colors.primaryText} 2px solid;
  border-radius: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
  background-color: inherit;
  color: ${({ theme }) => theme.colors.primaryText};
  transition: all 0.3s ease-in-out;
  &:hover {
    scale:1.1;
  }
  &:active {
    scale:0.9;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  color: ${({ theme }) => theme.colors.primaryText};
`;

const NotFound = () => {
  const router = useRouter();

  return (
    <>
      <Main>
        <h1>Ooops...</h1>
        <h2>Page Not Found</h2>
        <BackButton onClick={() => router.push('/')}>
          Go Back
        </BackButton>
      </Main>
    </>
  );
};

export default NotFound;