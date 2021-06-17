import React from 'react'

import Stars from '../Stars'
import {
  Container,
  Image,
  ContainerInfos,
  Title,
  Text,
  ContainerBadges,
  Badge,
  BadgeIcon
} from './styles'

interface RestaurantCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  address: string
  starsNumber: number
  price: string
  type: string
  src: string
  alt: string
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  address,
  starsNumber,
  price,
  type,
  src,
  alt
}) => (
  <Container>
    <Image alt={alt} src={src} />
    <ContainerInfos>
      <Title>{name}</Title>
      <Text>{address}</Text>
      <Stars solid={true} number={starsNumber} color="#39b54a" size="14pt" />
      <ContainerBadges>
        <Badge>
          <BadgeIcon />
          {price}
        </Badge>
        <Badge type="secondary">{type}</Badge>
      </ContainerBadges>
    </ContainerInfos>
  </Container>
)

export default RestaurantCard
