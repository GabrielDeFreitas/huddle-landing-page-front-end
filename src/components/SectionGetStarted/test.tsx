import { render, screen } from '@testing-library/react'

import SectionGetStarted from '.'

describe('<SectionGetStarted />', () => {
  it('should render the heading', () => {
    const { container } = render(<SectionGetStarted />)

    expect(screen.getByRole('heading', { name: /SectionGetStarted/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
