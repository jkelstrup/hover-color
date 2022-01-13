import createColor from "./createColor";
import calcContrast from "./calcContrast";
import adjust from "./adjust";

export default function matchContrast(originalColor,targetContrast) {
  targetContrast = Math.round(targetContrast * 1000) / 1000;
  console.log("FROM MATCH CONTRAST!");
  console.log("targetContrast",targetContrast);

  let newColor = createColor(originalColor);

  let adjustment = originalColor.pLight > 0.5 ? -1 : 1; // If originalColor is bright, we'll go for darker, and vice versa.
  console.log("adjustment",adjustment);

  // if (targetContrast === 1) { // Nothing to do here.
  //   return originalColor;
  // }

  while (calcContrast(newColor,originalColor) < targetContrast) { // We haven't reached the target contrast yet
    newColor = adjust(newColor,{l: adjustment});
    console.log("newColor",newColor);
    console.log("CONTRAST",calcContrast(newColor,originalColor));
  }

  // else if (newColor.pLight > targetContrast) { // currentLum is BRIGHTER than targetLum, we'll darken it.
  //   let counter = 0;
  //   while (newColor.pLight > targetContrast && counter < 100) {
  //     newColor = adjust(newColor,{l: -1})
  //   }
  // }

  return newColor;
}
