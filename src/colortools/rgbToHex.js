export default function rgbToHex({r,g,b}) {
  r = Math.round(r);
  g = Math.round(g);
  b = Math.round(b);

  function numToHex(num) {
    let hex = num.toString(16);
    if (hex.length === 1) hex = "0"+hex;
    return hex.toUpperCase();
  }

  return "#" + numToHex(r) + numToHex(g) + numToHex(b);
}
