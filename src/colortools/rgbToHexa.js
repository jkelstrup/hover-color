export default function rgbToHexa({r,g,b,a = 1}) {
  r = Math.round(r);
  g = Math.round(g);
  b = Math.round(b);
  a = Math.round(a*255);

  function numToHex(num) {
    let hex = num.toString(16);
    if (hex.length === 1) hex = "0"+hex;
    return hex.toUpperCase();
  }

  return "#" + numToHex(r) + numToHex(g) + numToHex(b)  + numToHex(a);
}
