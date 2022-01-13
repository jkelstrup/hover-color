import createColor from "./createColor";

export default function redefine(originalColor,update) {
  let newColor;
  let a = 1;

  if (update.hasOwnProperty("a")) {
    a = update.a;
  }

  if (update.hasOwnProperty("r") || update.hasOwnProperty("g") || update.hasOwnProperty("b")) {
    newColor = createColor({
      r: update.r !== undefined ? parseInt(update.r) : originalColor.r,
      g: update.g !== undefined ? parseInt(update.g) : originalColor.g,
      b: update.b !== undefined ? parseInt(update.b) : originalColor.b,
      a
    });
  } else if (update.hasOwnProperty("h") || update.hasOwnProperty("s") || update.hasOwnProperty("l")) {
    newColor = createColor({
      h: update.h !== undefined ? parseInt(update.h) : originalColor.h,
      s: update.s !== undefined ? parseInt(update.s) : originalColor.s,
      l: update.l !== undefined ? parseInt(update.l) : originalColor.l,
      a
    });
  } else if (update.hasOwnProperty("a")) {
    let newValues = {};

    if (originalColor.src === "hsl") {
      newValues.h = originalColor.h;
      newValues.s = originalColor.s;
      newValues.l = originalColor.l;
      newValues.a = a;
    } else {
      newValues.r = originalColor.r;
      newValues.g = originalColor.g;
      newValues.b = originalColor.b;
      newValues.a = a;
    }

    newColor = createColor(newValues);
  } else {
    console.error("Bad input",update);
    throw new Error(`Bad input!`);
  }

  return newColor;
}
