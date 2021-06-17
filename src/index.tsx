import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { RecoilRoot } from 'recoil'

import GlobalStyles from './styles/global'
import theme from './styles/theme'
import Routers from './Routers'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <RecoilRoot>
        <Routers />
        <GlobalStyles />
      </RecoilRoot>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
)
