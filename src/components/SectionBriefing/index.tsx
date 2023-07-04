import * as S from './styles'
import Image from 'next/image'
import { LandingPageProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type SectionBriefingProps = {
  landingPage: LandingPageProps['landingPage']
}

const SectionBriefing = ({ landingPage }: SectionBriefingProps) => {
  const {
    attributes: { sectionBriefing }
  } = landingPage.data

  return (
    <S.Wrapper>
      {sectionBriefing.briefingCard.map((item, index) => (
        <S.Article key={index}>
          {index === 1 ? (
            <>
              <S.Picure>
                <Image
                  src={getImageUrl(item.image.data.attributes.url)}
                  alt={item.image.data.attributes.alternativeText}
                  layout="responsive"
                  width={693}
                  height={498}
                />
              </S.Picure>
              <S.Card>
                <S.Title>{item.title}</S.Title>
                <S.Text>{item.description}</S.Text>
              </S.Card>
            </>
          ) : (
            <>
              <S.Card>
                <S.Title>{item.title}</S.Title>
                <S.Text>{item.description}</S.Text>
                <S.Text></S.Text>
              </S.Card>
              <S.Picure>
                <Image
                  src={getImageUrl(item.image.data.attributes.url)}
                  alt={item.image.data.attributes.alternativeText}
                  layout="responsive"
                  width={693}
                  height={498}
                />
              </S.Picure>
            </>
          )}
        </S.Article>
      ))}
    </S.Wrapper>
  )
}

export default SectionBriefing
