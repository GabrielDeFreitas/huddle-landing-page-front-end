import * as S from './styles'
import Image from 'next/image'
import { LandingPageProps } from 'types/api'

type FooterProps = {
  landingPage: LandingPageProps['landingPage']
}

const Footer = ({ landingPage }: FooterProps) => {
  const {
    attributes: { footer }
  } = landingPage.data

  return (
    <S.Footer>
      <S.ContainerFooter>
        <S.Contact>
          {footer.contacts.map((item, index) => (
            <S.FlexInLine key={index}>
              <Image
                src={`http://localhost:1337${item.icon.data.attributes.url}`}
                alt={item.icon.data.attributes.alternativeText}
                width={13}
                height={18}
              />
              <p>{item.title}</p>
            </S.FlexInLine>
          ))}
        </S.Contact>

        <S.FlexList>
          <S.UnorderedList>
            {footer.aboutUs.slice(0, 3).map((item, index) => (
              <S.List key={index}>
                <S.Link target="_blank" href={item.url} rel="noreferrer">
                  {item.title}
                </S.Link>
              </S.List>
            ))}
          </S.UnorderedList>

          <S.UnorderedList>
            {footer.aboutUs.slice(3).map((item, index) => (
              <S.List key={index}>
                <S.Link target="_blank" href={item.url} rel="noreferrer">
                  {item.title}
                </S.Link>
              </S.List>
            ))}
          </S.UnorderedList>
        </S.FlexList>

        <S.FlexSocial>
          <S.SocialIcons>
            {footer.socialLinks.map((item, index) => (
              <S.Icons
                target="_blank"
                href={item.icon.data.attributes.url}
                rel="noreferrer"
                key={index}
              >
                <Image
                  src={`http://localhost:1337${item.icon.data.attributes.url}`}
                  alt={item.icon.data.attributes.alternativeText}
                  width={38}
                  height={38}
                />
              </S.Icons>
            ))}
          </S.SocialIcons>
          <S.Copyright>{footer.copyright}</S.Copyright>
        </S.FlexSocial>
      </S.ContainerFooter>
    </S.Footer>
  )
}

export default Footer
