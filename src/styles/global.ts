import { createGlobalStyle } from 'styled-components'
import facepaint from 'facepaint'

import theme, { ThemeType } from '@/styles/theme'

const mq = facepaint(theme.breakpoints)

export default createGlobalStyle<{ theme: ThemeType }>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${props => props.theme.colors.white};
  }

  html, body, button, textarea, input {
    -webkit-font-smoothing: antialiased;
    color: ${props => props.theme.colors.black};
    font-family: 'Roboto', sans-serif;
    ${mq({ 'font-size': ['87.5%', '87.5%', '93.75%'] })}
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.7;
  }
`
