import React from 'react'
import styled from 'styled-components'

type ContainerProps = React.HTMLAttributes<HTMLDivElement>

export const Container = styled.div<ContainerProps>`
  margin-top: 60px;

  @media (max-width: 600px) {
    margin-top: 24px;
  }
`
