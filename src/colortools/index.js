import adjust from "./adjust";
import calcContrast from "./calcContrast";
import calcLum from "./calcLum";
import createColor from "./createColor";
import darken from "./darken";
import hexToRgb from "./hexToRgb";
import hslToRgb from "./hslToRgb";
import invert from "./invert";
import isValidHex from "./isValidHex";
import isValidHsl from "./isValidHsl";
import isValidRgb from "./isValidRgb";
import isValidRgba from "./isValidRgba";
import lighten from "./lighten";
import matchContrast from "./matchContrast";
import matchLum from "./matchLum";
import redefine from "./redefine";
import rgbToHex from "./rgbToHex";
import rgbToHexa from "./rgbToHexa";
import rgbToHsl from "./rgbToHsl";
import rgbToRgb from "./rgbToRgb";
import scale from "./scale";
import step from "./step";

const colorUtils = {
  adjust,
  calcContrast,
  calcLum,
  createColor,
  darken,
  hexToRgb,
  hslToRgb,
  invert,
  isValidHex,
  isValidHsl,
  isValidRgb,
  isValidRgba,
  lighten,
  matchContrast,
  matchLum,
  redefine,
  rgbToHex,
  rgbToHexa,
  rgbToHsl,
  rgbToRgb,
  scale,
  step
}

export { adjust };
export { calcContrast };
export { calcLum };
export { createColor };
export { darken };
export { hexToRgb };
export { hslToRgb };
export { invert };
export { isValidHex };
export { isValidHsl };
export { isValidRgb };
export { isValidRgba };
export { lighten };
export { matchContrast };
export { matchLum };
export { redefine };
export { rgbToHex };
export { rgbToHexa };
export { rgbToHsl };
export { rgbToRgb };
export { scale };
export { step };

export default colorUtils;
