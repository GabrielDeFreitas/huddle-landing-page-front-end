import styled from 'styled-components'

export const Footer = styled.footer`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: white;
  background-color: hsla(192, 100%, 9%, 1);
  padding-block: 72px;
  padding-inline: 40px;
`
export const ContainerFooter = styled.div`
  padding-top: 60px;
  display: flex;
  align-items: flex-end;
  margin: 0 auto;
  max-width: 1270px;
  justify-content: space-between;
`
export const Contact = styled.div`
  max-width: 380px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  column-gap: 16px;
`

export const FlexInLine = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;
`

export const FlexSocial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-around;
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
`

export const FlexList = styled.div`
  display: flex;
  gap: 80px;
  align-items: center;
  justify-content: center;
`

export const UnorderedList = styled.ul`
  list-style-type: none;
`

export const List = styled.li`
  padding-block: 0.8rem;
`

export const Link = styled.a`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  opacity: 90%;
  color: white;
  text-decoration: none;
`
export const Icons = styled.a`
  opacity: 90%;
  transition: all ease 0.2s;

  &:hover {
    transform: translatey(-6px);
    opacity: 50%;
  }
`

export const Copyright = styled.p``
