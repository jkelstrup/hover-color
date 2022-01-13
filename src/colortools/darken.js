import createColor from "./createColor";

// This will move the color xx% closer to black (l: 0)
export default function darken(originalColor,pct) {
  if (pct <= 0 || pct > 100) {
    throw new Error(`Bad input: ${pct}`)
  }

  let {h,s,l} = originalColor;

  // convert pct to decimal:
  pct /= 100;

  // flip the percentage (as we're making things darker)
  pct = 1-pct;

  l *= pct;

  return createColor({h,s,l});
}
