export default function isValidHsl(hsl) {
  return (
    hsl.h >= 0 &&
    hsl.h <= 360 &&
    hsl.s >= 0 &&
    hsl.s <= 100 &&
    hsl.l >= 0 &&
    hsl.l <= 100
  )
}
