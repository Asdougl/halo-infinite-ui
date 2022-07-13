export const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[a-z0-9 ]/g, '')
    .replaceAll(' ', '-')
}
