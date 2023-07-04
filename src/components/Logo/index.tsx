import Image from 'next/image'
import { getImageUrl } from 'utils/getImageUrl'

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
      src={getImageUrl(logo.image.data.attributes.url)}
      alt={logo.image.data.attributes.alternativeText}
      width={200}
      height={33}
    />
  )
}

export default Logo
