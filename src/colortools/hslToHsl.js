export default function hslToHsl({h,s,l,a = 1}) {
  return {
    h,
    s,
    l,
    hsl: `hsl(${h},${s}%,${l}%)`,
    hsla: `hsla(${h},${s}%,${l}%,${a})`
  }
}
