export function boldRed(str) {
  return `\u001b[1m\u001b[31m${str}\u001b[39m\u001b[22m`;
}

export function boldGreen(str) {
  return `\u001b[1m\u001b[32m${str}\u001b[39m\u001b[22m`;
}

export function gray(str) {
  return `\u001b[90m${str}\u001b[39m`;
}
