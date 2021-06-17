import styled from 'styled-components'

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  padding: 12px;
  box-shadow: 0 1px 2px rgba(52, 60, 88, 0.4);

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Logo = styled.img`
  width: 138px;
  height: 60px;
  margin-right: 48px;

  @media (max-width: 600px) {
    margin-bottom: 24px;
    margin-right: 0;
  }
`
