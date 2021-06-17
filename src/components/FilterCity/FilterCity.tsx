import React from 'react'
import useSearch from './hooks/useSearch'

import {
  Container,
  Form,
  Input,
  Button,
  Label,
  Dropdown,
  ContainerDropdown,
  DropdownButton
} from './styles'

interface FilterCityProps extends React.HTMLAttributes<HTMLFormElement> {
  widthSize?: 'large'
  heightSize?: 'small'
  hasNotDropdown?: boolean
}

const FilterCity: React.FC<FilterCityProps> = ({
  style,
  widthSize,
  heightSize,
  hasNotDropdown
}) => {
  const {
    handleSubmit,
    handleChange,
    handleFocus,
    handleSelect,
    isOpen,
    cities,
    city
  } = useSearch()

  return (
    <Container style={style}>
      <Form widthSize={widthSize} onSubmit={handleSubmit}>
        <Label id="search" onFocus={handleFocus}>
          <Input
            heightSize={heightSize}
            placeholder="Digite a sua cidade"
            value={city}
            id="search-input"
            onChange={handleChange}
          />
        </Label>
        <Button heightSize={heightSize} type="submit">
          BUSCAR
        </Button>
      </Form>
      {isOpen && !hasNotDropdown && (
        <ContainerDropdown>
          <Dropdown id="search-dropwdown">
            {cities.map(city => (
              <DropdownButton onClick={() => handleSelect(city)} key={city}>
                {city}
              </DropdownButton>
            ))}
          </Dropdown>
        </ContainerDropdown>
      )}
    </Container>
  )
}

export default FilterCity
