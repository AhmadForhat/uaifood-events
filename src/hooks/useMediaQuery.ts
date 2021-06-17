/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'

const isClient = typeof window === 'object'

const isAPISupported = (api: any) =>
  typeof window !== 'undefined' ? api in window : false

const errorMessage =
  'matchMedia is not supported, this could happen both because window.matchMedia is not supported by' +
  +" your current browser or you're using the useMediaQuery hook whilst server side rendering."

const useMediaQuery = (mediaQuery: any) => {
  if (!isClient || !isAPISupported('matchMedia')) {
    // eslint-disable-next-line no-console
    console.warn(errorMessage)
    return null
  }

  const [isVerified, setIsVerified] = useState(
    !!window.matchMedia(mediaQuery).matches
  )

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery)
    const documentChangeHandler = () => setIsVerified(!!mediaQueryList.matches)

    try {
      mediaQueryList.addEventListener('change', documentChangeHandler)
    } catch (e) {
      console.error(e)
      mediaQueryList.addListener(documentChangeHandler)
    }

    documentChangeHandler()
    return () => {
      try {
        mediaQueryList.removeEventListener('change', documentChangeHandler)
      } catch (e) {
        console.error(e)
        mediaQueryList.removeListener(documentChangeHandler)
      }
    }
  }, [mediaQuery])

  return isVerified
}

export default useMediaQuery
