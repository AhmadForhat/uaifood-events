/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useState, ChangeEvent, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { normalizeText } from '../../utils/normalizeText'

const mockCites = ['São Paulo', 'Jundiaí', 'Campinas', 'Guaratinguetá']

const useSearch = () => {
  const history = useHistory()
  const [city, setCity] = useState('')
  const [isOpen, setOpen] = useState(false)
  const [cities, setCities] = useState(mockCites)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOpen(true)
    setCity(event.target.value)
  }

  const handleFocus = () => setOpen(true)

  const closeSearchDropdown = (event: any) => {
    if (!event.target.id) {
      setOpen(false)
    }
  }

  const handleSelect = (value: string) => {
    setCity(value)
    setOpen(false)
  }

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (mockCites.includes(city)) {
      history.push(`restaurantes?city=${normalizeText(city)}`)
    }
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('click', closeSearchDropdown)
    }

    return () => window.removeEventListener('click', closeSearchDropdown)
  }, [isOpen])

  useEffect(() => {
    if (city) {
      setCities(
        cities.filter(item => item.toUpperCase().includes(city.toUpperCase()))
      )
    } else {
      setCities(mockCites)
    }
  }, [city])

  return {
    city,
    isOpen,
    cities,
    handleChange,
    handleFocus,
    handleSelect,
    handleSubmit
  }
}

export default useSearch
