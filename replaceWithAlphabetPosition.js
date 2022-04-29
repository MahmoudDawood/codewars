function alphabetPosition(text) {
  return text
    .split('')
    .filter((x) => x.toLowerCase() != x.toUpperCase())
    .map((x) => x.toLowerCase().charCodeAt(0) - 96)
    .join(' ')
}