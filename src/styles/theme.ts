const breakpoints = [
  '@media(min-width: 420px)',
  '@media(min-width: 920px)',
  '@media(min-width: 1120px)'
]

export type ThemeType = typeof theme

const theme = {
  colors: {
    black: '#222222',
    primary: '#09A013',
    secundary: '#AA8234',
    terciary: '#ABCDEF',
    text: '#222222',
    white: '#FFFDF9'
  },
  fontSizes: {
    large: '2.25rem',
    medium: '1.5rem',
    small: '1.125rem'
  },
  breakpoints
}

export default theme
