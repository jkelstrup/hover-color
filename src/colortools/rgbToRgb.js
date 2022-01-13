export default function rgbToRgb({r,g,b,a = 1}) {
  return {
    r,
    g,
    b,
    rgb: `rgb(${r},${g},${b})`,
    rgba: `rgba(${r},${g},${b},${a})`
  }
}
