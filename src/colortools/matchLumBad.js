import createColor from "./createColor";
import redefine from "./redefine";
import scale from "./scale";

export default function matchLum(originalColor,targetLum) {
  targetLum = Math.round(targetLum * 1000) / 1000;

  let newColor = createColor(originalColor);

  if (targetLum === newColor.lum) { // Nothing to do here.
    return originalColor;
  }

  else if (targetLum === 0) { // 0 means black.
    newColor = redefine(newColor,{l: 0});
  }

  else if (newColor.lum < targetLum) { // original lum is DARKER than targetLum, we'll lighten it.
    let counter = 0;
    while (newColor.lum < targetLum && counter < 1000) {
      console.log("DARKENING! Round #", counter++);
      newColor = scale(newColor,{red: 1.01, green: 1.01, blue: 1.01})
    }
  }

  else if (newColor.lum > targetLum) { // currentLum is LIGHTER than targetLum, we'll darken it.
    let counter = 0;
    while (newColor.lum > targetLum && counter < 1000) {
      console.log("LIGHTENING! Round #", counter++);
      newColor = scale(newColor,{red: .99, green: .99, blue: .99})
    }
  }

  return newColor;
}
