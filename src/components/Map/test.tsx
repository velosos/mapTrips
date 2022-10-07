import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Barra da Tijuca',
      slug: 'barra-da-tijuca',
      location: {
        latitude: -23.000372,
        longitude: -43.365894
      }
    }

    render(<Map places={[place]} />)

    expect(screen.getByTitle(/Barra da Tijuca/i)).toBeInTheDocument()
  })
})
