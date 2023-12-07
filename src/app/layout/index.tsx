import {
  backgroundColor,
  borderColor,
  darkBlueColor,
  mainPadding
} from '@/shared/cssConstants'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${darkBlueColor}
  }
  html, body {
    height: 100%;
    background-color: ${backgroundColor};
  }
  body {
    font-family: 'PT Sans', sans-serif;
  }
`

const Main = styled.main`
  margin: 0 auto;
  max-width: 1440px;
  min-width: 0;
  height: 100vh;
  min-height: 0%;
  border: 1px solid ${borderColor};
  padding: ${mainPadding};
`

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      <Main>{children}</Main>
    </>
  )
}
