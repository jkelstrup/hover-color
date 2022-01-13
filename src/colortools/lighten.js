import createColor from './createColor';

// This will move the color xx% closer to white (l: 100)
export default function lighten(originalColor,pct) {
  if (pct <= 0 || pct > 100) {
    throw new Error(`Bad input: ${pct}`)
  }

  let {h,s,l} = originalColor;
  let distanceToWhite = 100-l;

  // convert pct to decimal:
  pct /= 100;

  // Determine the increase:
  let increase = distanceToWhite * pct;

  // Apply increase to lum:
  l += increase;

  return createColor({h,s,l});
}
