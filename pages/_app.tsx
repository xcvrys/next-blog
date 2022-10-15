import '../styles/fonts.css';
import { GlobalStyle } from '../styles/globals'
import NextNProgress from "nextjs-progressbar";
import { Footer } from '../components/molecules/footer';
import { Header } from '../components/molecules/header';
import { useRouter } from 'next/router';
import styled, { ThemeProvider } from 'styled-components';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return ( //if path != /404, render header and footer
    <>
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        <GlobalStyle />
        <NextNProgress color="#FFFAFA" />

        {router.pathname !== "/404" &&
          <Header>
            <Switch onClick={toggleTheme}>
              Switch to {theme === 'dark' ? 'light' : 'dark'}
            </Switch>
          </Header>}

        <Component {...pageProps} />
        {router.pathname !== "/404" && <Footer />}
      </ThemeProvider>
    </>
  )
}

export default MyApp

const light = {
  colors: {
    primary: '#e8cebf',
    secondary: '#ddaf94',
    primaryText: '#222222',
    secondaryText: '#222222',
    category: '#276152AB',
    categoryText: '#FFFAFA',
    blocksOdd: '#276152',
    blocksEven: '#DDAF95',
    list: '#FFFAFA',
    blogAuthor: '#FFFAFA',
    red: '#f7665e',
    gray: '#a4a4a4',
  },
}

const dark = {
  colors: {
    primary: '#202125',
    secondary: '#41406B',
    primaryText: '#DF9872',
    secondaryText: '#FFFAFA',
    category: '#DF9872AB',
    categoryText: '#FFFAFA',
    blocksOdd: '#DF9872',
    blocksEven: '#41406B',
    list: '#41406B',
    blogAuthor: '#41406B',
    red: '#f7665e',
    gray: '#a4a4a4',
  },
}
const Switch = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryText};
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 1rem;
  border: none;
  font-size: 1rem;
  padding: 0.8rem;
  cursor: pointer;
`;
