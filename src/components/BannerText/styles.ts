import React from 'react'
import styled from 'styled-components'

type ContainerProps = React.HTMLAttributes<HTMLDivElement>

export const Container = styled.div<ContainerProps>`
  width: 70%;
  margin: 100px auto 0 auto;

  @media (max-width: 600px) {
    margin: 24px auto 0 auto;
  }
`
