import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.familly.openSans};
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.ink};
  }

  button {
    font-size: 12px;
  }
`
