import * as S from './styles'
import Logo from 'components/Logo'
import Button from 'components/Button'

import { LandingPageProps } from 'types/api'

type HeaderProps = {
  landingPage: LandingPageProps['landingPage']
}

const Header = ({ landingPage }: HeaderProps) => {
  const {
    attributes: { header }
  } = landingPage.data

  return (
    <S.Wrapper>
      <S.Container>
        <Logo></Logo>
      </S.Container>
      <S.Content>
        <S.TextBlock>
          <S.Title>{header.title}</S.Title>
          <S.Description>{header.description}</S.Description>
          <Button
            onClick={() => console.log('button click!')}
            ariaLabel="Click to submit the form"
            href={header.button.url}
          >
            {header.button.label}
          </Button>
        </S.TextBlock>
      </S.Content>
    </S.Wrapper>
  )
}

export default Header
