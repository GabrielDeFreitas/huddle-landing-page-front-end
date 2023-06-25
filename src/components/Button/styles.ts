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
  /* Estilos básicos do botão */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  /* Estilo para o botão "wide" */
  ${({ wide }) =>
    wide &&
    css`
      width: 100%;
    `}

  /* Estilo para o botão com preço */
  ${({ withPrice }) =>
    withPrice &&
    css`
      &:before {
        content: '$';
        margin-right: 0.25rem;
      }
    `}

  /* Estilo para a variante primária */
  ${({ variant }) =>
    variant === 'primary' &&
    css`
      background-color: #007bff;
      color: #fff;

      &:hover {
        background-color: #0069d9;
      }
    `}

  /* Estilo para a variante secundária */
  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background-color: #6c757d;
      color: #fff;

      &:hover {
        background-color: #5a6268;
      }
    `}

  /* Estilos responsivos de tamanho */
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

  /* Estilo para o botão desativado */
  ${({ disabled, enabled }) =>
    (disabled || enabled === false) &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    `}
`
