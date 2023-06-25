import React from 'react'
import * as S from './styles'

interface ButtonProps {
  children?: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  enabled?: boolean
  size?: 'xs' | 'sm' | 'lg' | 'xl'
  ariaLabel?: string
  ariaDescribedby?: string
  ariaPressed?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant,
  disabled,
  enabled,
  size,
  ariaLabel,
  ariaPressed,
  ariaDescribedby
}) => {
  const buttonProps = {
    href: href || undefined,
    onClick: onClick || undefined,
    variant: variant || 'primary',
    disabled: disabled || false,
    enabled: enabled === undefined ? true : enabled,
    size: size || undefined
  }

  return (
    <S.ButtonWrapper
      {...buttonProps}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      aria-describedby={ariaDescribedby}
    >
      {children}
    </S.ButtonWrapper>
  )
}

export default Button
