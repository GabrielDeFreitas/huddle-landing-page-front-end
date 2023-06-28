import * as S from './styles'
import Button from 'components/Button'
import { LandingPageProps } from 'types/api'

type SectionGetStartedProps = {
  landingPage: LandingPageProps['landingPage']
}

const SectionGetStarted = ({ landingPage }: SectionGetStartedProps) => {
  const {
    attributes: { sectionGetStarted }
  } = landingPage.data

  return (
    <S.Article>
      <S.Title>{sectionGetStarted.title}</S.Title>
      <Button>{sectionGetStarted.button.label}</Button>
    </S.Article>
  )
}

export default SectionGetStarted
