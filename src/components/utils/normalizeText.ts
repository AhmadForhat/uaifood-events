/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const normalizeText = (text: string) => {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(' ', '_')
}
