import React from 'react'

import { createGenericArray } from './utils'
import { StarSvg, StarSolidSvg } from './styles'

interface StarsComponentProps {
  number: number
  solid?: boolean
  color?: string
  size?: string | number
}

const Stars: React.FC<StarsComponentProps> = ({
  number,
  solid,
  color,
  size
}) => (
  <>
    {createGenericArray(number).map(index =>
      solid ? (
        <StarSolidSvg
          color={color || 'current'}
          key={`${name}-${index}`}
          width={size || '18pt'}
        />
      ) : (
        <StarSvg
          color={color || 'current'}
          key={`${name}-${index}`}
          width={size || '18pt'}
        />
      )
    )}
  </>
)

export default Stars
