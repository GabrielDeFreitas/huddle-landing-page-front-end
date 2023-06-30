import * as S from './styles'
import Image from 'next/image'

import { LandingPageProps } from 'types/api'

type LogoProps = {
  landingPage: LandingPageProps['landingPage']
}

const Logo = ({ landingPage }: LogoProps) => {
  const {
    attributes: { logo }
  } = landingPage.data

  return (
    <Image
      src={`http://localhost:1337${logo.image.data.attributes.url}`}
      alt={logo.image.data.attributes.alternativeText}
      width={200}
      height={33}
    />
  )
}

export default Logo
