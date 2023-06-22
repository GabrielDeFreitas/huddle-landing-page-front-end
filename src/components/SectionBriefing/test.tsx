import { render, screen } from '@testing-library/react'

import SectionBriefing from '.'

describe('<SectionBriefing />', () => {
  it('should render the heading', () => {
    const { container } = render(<SectionBriefing />)

    expect(screen.getByRole('heading', { name: /SectionBriefing/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
