import calcLum from "./calcLum";
import calcPLight from "./calcPLight";
import hexToRgb from "./hexToRgb";
import hslToHsl from "./hslToHsl";
import hslToRgb from "./hslToRgb";
import isValidHex from "./isValidHex";
import isValidHsl from "./isValidHsl";
import isValidRgb from "./isValidRgb";
import isValidRgba from "./isValidRgba";
import rgbToHex from "./rgbToHex";
import rgbToHexa from "./rgbToHexa";
import rgbToHsl from "./rgbToHsl";
import rgbToRgb from "./rgbToRgb";

export default function createColor(input) {
  let source;
  let rgb;
  let hsl;
  let hex;
  let hexa;
  let a = 1;

  if (input === undefined) {
    let randomRgb = {
      r: Math.floor(Math.random() * (255 + 1)),
      g: Math.floor(Math.random() * (255 + 1)),
      b: Math.floor(Math.random() * (255 + 1))
    }
    source = "rgb";
    rgb = rgbToRgb(randomRgb);
    hsl = rgbToHsl(randomRgb);
    hex = rgbToHex(randomRgb);
    hexa = rgbToHexa(randomRgb);
  }

  // else if (isValidRgba(input)) {
  //   source = "rgba";

  // }

  else if (isValidRgb(input)) {
    source = "rgb";
    rgb = rgbToRgb(input);
    hsl = rgbToHsl(input);
    hex = rgbToHex(input);
    hexa = rgbToHexa(input);
  }

  else if (isValidHsl(input)) {
    source = "hsl";
    hsl = hslToHsl(input);
    rgb = hslToRgb(input);
    hex = rgbToHex(rgb);
    hexa = rgbToHexa(rgb);
  }

  else if (isValidHex(input)) {
    source = "hex";
    hex = input;
    rgb = hexToRgb(input);
    hsl = rgbToHsl(rgb);
    hexa = rgbToHexa(rgb);
  }

  else {
    console.error("Bad input",input);
    throw new Error(`Bad input!`);
  }

  let color = Object.assign({},
    rgb,
    hsl,
    {
      a: a,
      hex: hex,
      hexa: hexa,
      lum: calcLum(rgb),
      pLight: calcPLight(rgb),
      src: source,
      toString: function() {
        return hex
      }
    }
  )

  return color;
}
