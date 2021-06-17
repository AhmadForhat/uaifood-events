import React from 'react'

import CheckedInput from '../CheckedInput'
import useMenuFilters from './hooks/useMenuFilters'
import { Container, Title, ContainerCheckeds, Text } from './styles'

const FiltersMenu: React.FC = () => {
  const {
    starsValues,
    handleChangeStars,
    costsValues,
    handleCosts,
    cuisineValues,
    handleCuisineTypes
  } = useMenuFilters()

  return (
    <Container>
      <div>
        <Title>NOTA:</Title>
        <ContainerCheckeds>
          {starsValues.map(({ number, value }) => (
            <CheckedInput
              key={value}
              handleCheck={handleChangeStars}
              starNumber={number}
              value={value}
            />
          ))}
        </ContainerCheckeds>
      </div>
      <div>
        <Title>CUSTO PARA 2 PESSOAS:</Title>
        <ContainerCheckeds>
          {costsValues.map(({ text, value }) => (
            <CheckedInput handleCheck={handleCosts} key={value} value={value}>
              <Text>{text}</Text>
            </CheckedInput>
          ))}
        </ContainerCheckeds>
      </div>
      <div>
        <Title>TIPO DE COZINHA:</Title>
        <ContainerCheckeds>
          {cuisineValues.map(({ text, value }) => (
            <CheckedInput
              handleCheck={handleCuisineTypes}
              key={value}
              value={value}
            >
              <Text>{text}</Text>
            </CheckedInput>
          ))}
        </ContainerCheckeds>
      </div>
    </Container>
  )
}

export default FiltersMenu
