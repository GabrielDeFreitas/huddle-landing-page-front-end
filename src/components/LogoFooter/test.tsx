import { render, screen } from '@testing-library/react'

import LogoFooter from '.'

describe('<LogoFooter />', () => {
  it('should render the heading', () => {
    const { container } = render(<LogoFooter />)

    expect(screen.getByRole('heading', { name: /LogoFooter/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
