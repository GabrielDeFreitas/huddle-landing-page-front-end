import Image from 'next/image'

import { LandingPageProps } from 'types/api'

type LogoProps = {
  landingPage: LandingPageProps['landingPage']
}

const Logo = ({ landingPage }: LogoProps) => {
  const {
    attributes: { footer }
  } = landingPage.data

  return (
    <Image
      src={`http://localhost:1337${footer.image.data.attributes.url}`}
      alt={footer.image.data.attributes.alternativeText}
      width={200}
      height={33}
    />
  )
}

export default Logo
