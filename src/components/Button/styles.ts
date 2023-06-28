import styled, { css } from 'styled-components'

interface ButtonWrapperProps {
  wide?: boolean
  withPrice?: boolean
  variant?: 'primary' | 'secondary'
  size?: 'xs' | 'sm' | 'lg' | 'xl'
  disabled?: boolean
  enabled?: boolean
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  padding: 14px 64px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: black;
  box-shadow: 0px 6px 13px rgba(0, 37, 46, 0.07);
  transition: ease-in 0.3s;
  border: none;

  &:hover {
    transform: scale(1.05);
    opacity: 50%;
  }

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      color: white;
      background-color: hsla(322, 100%, 66%, 1);

      &:hover {
        color: white;
        background-color: rgb(0, 57, 71);
      }
    `}

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background-color: #6c757d;
      color: #fff;

      &:hover {
        background-color: #5a6268;
      }
    `}

  ${({ size }) =>
    size === 'xs' &&
    css`
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
    `}

  ${({ size }) =>
    size === 'sm' &&
    css`
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
    `}

  ${({ size }) =>
    size === 'lg' &&
    css`
      padding: 1rem 1.5rem;
      font-size: 1.25rem;
    `}

  ${({ size }) =>
    size === 'xl' &&
    css`
      padding: 1.5rem 2rem;
      font-size: 1.5rem;
    `}

  ${({ disabled, enabled }) =>
    (disabled || enabled === false) &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    `}
`
