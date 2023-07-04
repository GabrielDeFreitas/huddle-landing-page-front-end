import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from 'components/Button'

describe('Button component', () => {
  it('renders button correctly', () => {
    const { getByText } = render(<Button>Click me</Button>)
    const buttonElement = getByText('Click me')
    expect(buttonElement).toBeInTheDocument()
  })

  it('calls onClick function when clicked', () => {
    const onClickMock = jest.fn()
    const { getByText } = render(
      <Button onClick={onClickMock}>Click me</Button>
    )
    const buttonElement = getByText('Click me')
    fireEvent.click(buttonElement)
    expect(onClickMock).toHaveBeenCalled()
  })

  it('renders with primary variant by default', () => {
    const { getByText } = render(<Button>Click me</Button>)
    const buttonElement = getByText('Click me')
    expect(buttonElement).toHaveClass('primary')
  })

  it('renders with secondary variant when specified', () => {
    const { getByText } = render(<Button variant="secondary">Click me</Button>)
    const buttonElement = getByText('Click me')
    expect(buttonElement).toHaveClass('secondary')
  })

  it('renders disabled button when disabled prop is true', () => {
    const { getByText } = render(<Button disabled>Click me</Button>)
    const buttonElement = getByText('Click me')
    expect(buttonElement).toBeDisabled()
  })

  it('renders enabled button when enabled prop is true', () => {
    const { getByText } = render(<Button enabled>Click me</Button>)
    const buttonElement = getByText('Click me')
    expect(buttonElement).toBeEnabled()
  })

  it('renders button with specified size', () => {
    const { getByText } = render(<Button size="lg">Click me</Button>)
    const buttonElement = getByText('Click me')
    expect(buttonElement).toHaveClass('lg')
  })

  it('renders button with specified aria attributes', () => {
    const { getByText } = render(
      <Button
        ariaLabel="Aria Label"
        ariaPressed
        ariaDescribedby="description-id"
      >
        Click me
      </Button>
    )
    const buttonElement = getByText('Click me')
    expect(buttonElement).toHaveAttribute('aria-label', 'Aria Label')
    expect(buttonElement).toHaveAttribute('aria-pressed', 'true')
    expect(buttonElement).toHaveAttribute('aria-describedby', 'description-id')
  })
})
