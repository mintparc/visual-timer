import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.fontColor};
    background: ${({ theme }) => theme.backgroundColor};
  }
`

export default GlobalStyle
