import { useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import { normalizeText } from '../../../components/utils/normalizeText'

const mockCites = ['São Paulo', 'Jundiaí', 'Campinas', 'Guaratinguetá']
const reestructuerMocks = mockCites.map(city => normalizeText(city))

const useValidateRoute = () => {
  const { search } = useLocation()
  const history = useHistory()
  const params = new URLSearchParams(search)
  const city = params.get('city')

  useEffect(() => {
    if (!city || !reestructuerMocks.includes(city)) {
      history.push('/')
    }
  }, [history, city, mockCites])
}

export default useValidateRoute
