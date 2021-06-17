import React from 'react'

import RestaurantCard from '../RestaurantCard'
import useRestaurants from './hooks/useRestaurants'
import { restaurantsValues } from './enums'
import { Container } from './styles'

const RestaurantCards: React.FC = () => {
  useRestaurants()

  return (
    <Container>
      {restaurantsValues.map(restaurantProps => (
        <RestaurantCard key={restaurantProps.name} {...restaurantProps} />
      ))}
    </Container>
  )
}

export default RestaurantCards
