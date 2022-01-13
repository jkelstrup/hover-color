import createColor from "./createColor";
import redefine from "./redefine";
import adjust from "./adjust";

export default function matchLum(originalColor,targetLum) {
  targetLum = Math.round(targetLum * 1000) / 1000;

  let newColor = createColor(originalColor);

  if (targetLum === newColor.pLight) { // Nothing to do here.
    return originalColor;
  }

  else if (targetLum === 0) { // 0 means black.
    newColor = redefine(newColor,{l: 0});
  }

  else if (newColor.pLight < targetLum) { // original lum is DARKER than targetLum, we'll lighten it.
    let counter = 0;
    while (newColor.pLight < targetLum && counter < 100) {
      newColor = adjust(newColor,{l: 1})
    }
  }

  else if (newColor.pLight > targetLum) { // currentLum is BRIGHTER than targetLum, we'll darken it.
    let counter = 0;
    while (newColor.pLight > targetLum && counter < 100) {
      newColor = adjust(newColor,{l: -1})
    }
  }

  return newColor;
}
