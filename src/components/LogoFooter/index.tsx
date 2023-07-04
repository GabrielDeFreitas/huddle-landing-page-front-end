import Image from 'next/image'

import { LandingPageProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type LogoProps = {
  landingPage: LandingPageProps['landingPage']
}

const Logo = ({ landingPage }: LogoProps) => {
  const {
    attributes: { footer }
  } = landingPage.data

  return (
    <Image
      src={getImageUrl(footer.image.data.attributes.url)}
      alt={footer.image.data.attributes.alternativeText}
      width={220}
      height={53}
    />
  )
}

export default Logo
