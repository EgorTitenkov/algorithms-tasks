export function alphabetized(text: string): string {
  return text
    .replace(/[^A-Za-z]/g, '')
    .split('')
    .reduce(
      (acc, e, i, arr) =>
        i == arr.join('').toLowerCase().indexOf(e.toLowerCase())
          ? [...acc, arr.filter((c) => c.toLowerCase() == e.toLowerCase())]
          : acc,
      []
    )
    .map((e) => e.join(''))
    .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
    .join('')
}