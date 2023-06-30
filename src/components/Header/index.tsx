import * as S from './styles'
import Logo from 'components/Logo'
import Button from 'components/Button'
import Image from 'next/image'

import { LandingPageProps } from 'types/api'

type HeaderProps = {
  landingPage: LandingPageProps['landingPage']
}

const Header = ({ landingPage }: HeaderProps) => {
  const {
    attributes: { logo, header }
  } = landingPage.data

  return (
    <S.Wrapper>
      <S.Container>
        <Logo landingPage={landingPage}></Logo>
        <Button variant="secondary">{logo.button.label}</Button>
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
        <picture>
          <Image
            src={`http://localhost:1337${header.image.data.attributes.url}`}
            alt={header.image.data.attributes.alternativeText}
            width={610}
            height={435}
          />
        </picture>
      </S.Content>
    </S.Wrapper>
  )
}

export default Header
