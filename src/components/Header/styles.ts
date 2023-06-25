import styled from 'styled-components'

export const Wrapper = styled.main``

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1270px;
  justify-content: space-between;
  display: flex;
  align-items: center;
`
export const Content = styled.div`
  display: grid;
  column-gap: 50px;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  max-width: 1270px;
  justify-content: space-between;
`

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Title = styled.h1``

export const Description = styled.p``

// extender css de outra class
