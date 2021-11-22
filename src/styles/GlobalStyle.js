import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/earlyaccess/notosanskr.css');
    font-family: "Noto Sans KR", sans-serif !important;
  }
  
  body {
    color: ${({ theme }) => theme.fontColor};
    background: ${({ theme }) => theme.backgroundColor};
  }
`

export default GlobalStyle
