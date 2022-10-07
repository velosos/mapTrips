import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

describe('<LinkWrapper', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="my-link">Some children text</LinkWrapper>)

    const children = screen.getByRole('link', { name: /some children text/i })

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')

    screen.logTestingPlaygroundURL()
  })
})
