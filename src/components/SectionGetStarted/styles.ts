import styled from 'styled-components'

export const Article = styled.article`{
  display: flex;
  transform: translateY(70px);
  max-width: 800px;
  margin: 0 auto;
  gap: 30px;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 11px 0px 41px -10px rgb(9 48 57 / 8%);
  border: 2px solid rgba(0, 157, 255, 0.092);
  transition: ease-in 0.3s;
  background-color: white;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    max-width: 100%;
    transform: initial;
  }

  &:hover {
    border: 2.5px solid #0476c74b;
    box-shadow: 11px 0px 30px -10px rgba(18, 72, 84, 0.318);
    transition: ease-in 0.3s;
    filter: saturate(1.5);
  }
`

export const Title = styled.h3`
  text-align: center;
  font-weight: 700;
  line-height: 42px;
  font-size: 3.75rem;
  opacity: 90%;
`
