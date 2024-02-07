export function easeInOutCubic(t: number, b: number, c: number, d: number) {
  const cc = c - b;
  // eslint-disable-next-line no-param-reassign
  t /= d / 2;
  if (t < 1) {
    return (cc / 2) * t * t * t + b;
  }
  // eslint-disable-next-line no-return-assign, no-param-reassign
  return (cc / 2) * ((t -= 2) * t * t + 2) + b;
}
