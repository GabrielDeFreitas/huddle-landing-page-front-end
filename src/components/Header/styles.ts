import styled from 'styled-components'

export const Wrapper = styled.header`
  padding-block: 4.75rem;
  background-color: hsla(193, 100%, 96%, 1);
  padding-inline: 40px;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1270px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding-bottom: 1.25rem;
`
export const Content = styled.div`
  display: grid;
  column-gap: 50px;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  max-width: 1270px;
  justify-content: space-between;
  padding-block: 2rem;

  @media (max-width: 800px) {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
  }
`

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 50px;
  color: rgb(0, 57, 71);
  opacity: 90%;
`

export const Description = styled.p`
  font-size: 2.2rem;
  margin-block: 3rem;
  text-align: inherit;
  max-width: 570px;
`
