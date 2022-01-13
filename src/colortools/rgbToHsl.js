export default function rgbToHsl({r,g,b,a = 1}) {
  r /= 255;
  g /= 255;
  b /= 255;

  let max = Math.max(r, g, b)
  let min = Math.min(r, g, b);
  let d = max-min;

  let h, s, l = (max + min) / 2;

  if (d === 0) {
    h = s = 0; // achromatic
  } else {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        h = 0;
    }

    h /= 6;
  }

  h = Math.round(h*360);
  s = Math.round(s*100);
  l = Math.round(l*100);

  return {
    h: h,
    s: s,
    l: l,
    hsl: `hsl(${h},${s}%,${l}%)`,
    hsla: `hsla(${h},${s}%,${l}%,${a})`
  };
}
