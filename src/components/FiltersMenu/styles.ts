import styled from 'styled-components'

export const Container = styled.menu`
  height: 100%;
  width: 280px;
  background-color: white;
  box-shadow: 0 1px 2px rgba(52, 60, 88, 0.4);
  margin: 12px;
  padding: 24px;

  @media (max-width: 900px) {
    width: 90%;
    display: flex;
    margin: 12px auto;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.size.small};
  font-family: ${({ theme }) => theme.font.familly.openSans};
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.font.weight.regular}; ;
`

export const ContainerCheckeds = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`

export const Text = styled.p`
  margin-left: 12px;
`
