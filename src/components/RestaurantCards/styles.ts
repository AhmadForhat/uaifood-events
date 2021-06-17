import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  gap: 12px;
  padding-right: 12px;

  @media (max-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 0 12px;
  }
`
