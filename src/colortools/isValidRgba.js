export default function isValidRgb({r,g,b,a = 1}) {
  // Note: rgb (no a) is considered valid rgba as we default to a = 1.
  return (
    r >= 0 &&
    r <= 255 &&
    g >= 0 &&
    g <= 255 &&
    b >= 0 &&
    b <= 255 &&
    a >= 0 &&
    a <= 1
  )
}
