export function patternAmount(num: number): string {
  return Array.from({ length: num }, (x, i) =>
    Array.from({ length: num }, (x, j) => ((i + j) % num) + 1).join('')
  ).join('\n')
}