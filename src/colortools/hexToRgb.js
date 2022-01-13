export default function hexToRgb(hex) {
  if (hex.substring(0,1) !== "#") throw new Error(`Invalid input (${hex}). Input must start with "#".`);
  if (hex.length !== 7) throw new Error(`Invalid input (${hex}). Input should be #000000-#FFFFFF. Also, shorthand not allowed.`);

  let r = parseInt(hex.substring(1,3),16);
  let g = parseInt(hex.substring(3,5),16);
  let b = parseInt(hex.substring(5,7),16);

  return {
    r: r,
    g: g,
    b: b,
    rgb: `rgb(${r},${g},${b})`
  }
}
