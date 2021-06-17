import React from 'react'

import redLogo from '../../assets/images/logo-red.jpg'
import FilterCity from '../FilterCity'
import { ContainerMenu, Logo } from './styles'

const SearchMenu: React.FC = () => (
  <ContainerMenu>
    <Logo alt="Logo da empresa vermelho" src={redLogo} />
    <FilterCity
      widthSize="large"
      heightSize="small"
      style={{ marginTop: '0' }}
      hasNotDropdown={true}
    />
  </ContainerMenu>
)

export default SearchMenu
