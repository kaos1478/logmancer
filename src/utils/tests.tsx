import { render } from '@testing-library/react'
import theme from '@/styles/theme'
import { ThemeProvider } from 'styled-components'

export function renderWithTheme(component: any) {
  const Wrapper = ({ children }: any) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )

  return render(component, { wrapper: Wrapper })
}
