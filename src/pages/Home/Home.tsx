import React from 'react'

import WhiteLogo from '../../components/WhiteLogo'
import BannerText from '../../components/BannerText'
import FilterCity from '../../components/FilterCity'

import { Container } from './styles'

const Home: React.FC = () => (
  <Container>
    <WhiteLogo />
    <BannerText />
    <FilterCity />
  </Container>
)

export default Home
