import styled from 'styled-components'

export const Wrapper = styled.section`
  background-color: #fafeff;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-inline: 40px;
  padding-block: 120px;

  @media (max-width: 800px) {
    padding-block: 60px;
  }
`

export const Article = styled.article`
  background-color: #fff;
  display: grid;
  column-gap: 50px;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  max-width: 130rem;
  padding: 2rem calc(1.6rem);
  margin: 0px auto;
  box-shadow: 11px 0px 41px -10px rgba(9, 48, 57, 0.078);
  border: 2px solid rgba(0, 157, 255, 0.092);
  transition: ease-in 0.3s;
  border-radius: 16px;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
  }

  &:hover {
    border: 2.5px solid #0476c74b;
    box-shadow: 11px 0px 30px -10px rgba(18, 72, 84, 0.318);
    transition: ease-in 0.3s;
    filter: saturate(1.5);
  }
`

export const Title = styled.h2`
  font-weight: 700;
  line-height: 42px;
  font-size: 4.3rem;
  opacity: 90%;
`

export const Text = styled.p`
  font-size: 2.2rem;
  margin-block: 1.25rem;
  text-align: inherit;

  @media (max-width: 800px) {
    text-align: center;
  }
`

export const Card = styled.div`
  padding: 8rem;

  @media (max-width: 800px) {
    display: flex;
    text-align: center;
    padding: 3rem;
    flex-direction: column;
  }
`

export const Picure = styled.picture`
  width: 100%;
`
