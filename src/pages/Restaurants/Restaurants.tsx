import React from 'react'

import SearchMenu from '../../components/SearchMenu'
import FiltersMenu from '../../components/FiltersMenu'
import RestaurantsCard from '../../components/RestaurantCards'

import useValidateRoute from './hooks/useValidateRoute'
import { ContainerBody } from './styles'

const Restaurants: React.FC = () => {
  useValidateRoute()

  return (
    <>
      <SearchMenu />
      <ContainerBody>
        <FiltersMenu />
        <RestaurantsCard />
      </ContainerBody>
    </>
  )
}

export default Restaurants
