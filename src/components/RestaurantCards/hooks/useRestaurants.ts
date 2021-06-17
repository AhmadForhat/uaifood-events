import { useRecoilValue } from 'recoil'

import { starsState, costsState, cuisineTypesState } from '../../../atoms'

const useRestaurants = () => {
  const stars = useRecoilValue(starsState)
  const costs = useRecoilValue(costsState)
  const cuisineTypes = useRecoilValue(cuisineTypesState)

  console.log(stars, costs, cuisineTypes)
}

export default useRestaurants
