import React from 'react'

import whiteLogo from '../../assets/images/logo-white.jpg'

import { Container } from './styles'

const WhiteLogo: React.FC = () => (
  <Container>
    <img src={whiteLogo} alt="Logo da empresa" />
  </Container>
)

export default WhiteLogo
