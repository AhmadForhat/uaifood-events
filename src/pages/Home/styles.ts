import React from 'react'
import styled from 'styled-components'

import background from '../../assets/images/background.jpg'

type ContainerProps = React.HTMLAttributes<HTMLDivElement>

export const Container = styled.div<ContainerProps>`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${background});
`

export const LogoContainer = styled.div<ContainerProps>`
  margin-top: 60px;
`

export const ActionContainer = styled.div<ContainerProps>`
  width: 80%;
  margin: 120px auto 0 auto;
`
