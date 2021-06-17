import React, { ChangeEvent } from 'react'

import Stars from '../Stars'
import { Container, Input } from './styles'

interface CheckedInputProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  starNumber?: number
  isChecked?: boolean
  handleCheck?: (e: ChangeEvent<HTMLInputElement>) => void
}

const CheckedInput: React.FC<CheckedInputProps> = ({
  value,
  starNumber,
  isChecked,
  handleCheck,
  children
}) => (
  <Container>
    <Input
      value={value}
      type="checkbox"
      name={value}
      onChange={handleCheck}
      checked={isChecked}
    />
    {starNumber ? <Stars number={starNumber} /> : children}
  </Container>
)

export default CheckedInput
