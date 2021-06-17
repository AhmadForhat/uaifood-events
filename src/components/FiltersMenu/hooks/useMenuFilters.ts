import { useCallback, ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'

import { starsState, costsState, cuisineTypesState } from '../../../atoms/index'

import { starsValues, costsValues, cuisineValues } from '../enum/index'

const handleChange = (
  e: ChangeEvent<HTMLInputElement>,
  state: string[],
  setState: (value: string[]) => void
) => {
  if (e.target.checked && e.target.value) {
    setState([...state, e.target.value].filter(Boolean))
  } else {
    setState(state.filter(star => star !== e.target.value))
  }
}

const useMenuFilters = () => {
  const [stars, setStars] = useRecoilState(starsState)
  const [costs, setCosts] = useRecoilState(costsState)
  const [cuisineTypes, setCuisineTypes] = useRecoilState(cuisineTypesState)

  const handleChangeStars = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => handleChange(e, stars, setStars),
    [stars]
  )

  const handleCosts = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => handleChange(e, costs, setCosts),
    [costs]
  )

  const handleCuisineTypes = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      handleChange(e, cuisineTypes, setCuisineTypes),
    [cuisineTypes]
  )

  return {
    starsValues,
    handleChangeStars,
    costsValues,
    handleCosts,
    cuisineValues,
    handleCuisineTypes
  }
}

export default useMenuFilters
