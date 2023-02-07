/**
 * @jest-environment jsdom
 */

import { screen } from '@testing-library/react'
import Button from '@/components/atoms/Button'
import { renderWithTheme } from '@/utils/tests'

describe('Home', () => {
  it('renders a button', () => {
    renderWithTheme(<Button>Teste</Button>)

    const buttonText = screen.getByText(/Teste/i)

    expect(buttonText).toBeInTheDocument()
  })
})
