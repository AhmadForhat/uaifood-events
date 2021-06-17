export const createGenericArray = (number: number) => {
  const genericNullArray = new Array(number).fill(1)

  return genericNullArray.map((item, index) => index)
}
