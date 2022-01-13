import createColor from './createColor';

export default function invert(originalColor) {
  return createColor({
    r: 255-originalColor.r,
    g: 255-originalColor.g,
    b: 255-originalColor.b
  })
}
