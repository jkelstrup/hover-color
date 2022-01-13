// export default function calcContrast(c1,c2) {
//   let c1Lum = 0;
//   let c2Lum = 0;
//   let contrast = 0;

//   if (c1.hasOwnProperty("pLight")) {
//     c1Lum = c1.pLight;
//   } else {
//     throw new Error(`Invalid input (${c1}).`);
//   }

//   if (c2.hasOwnProperty("pLight")) {
//     c2Lum = c2.pLight;
//   } else {
//     throw new Error(`Invalid input (${c2}).`);
//   }

//   if (c1Lum === c2Lum) {
//     contrast = 1;
//   } else if (c1Lum > c2Lum) {
//     contrast = (c1Lum+0.05)/(c2Lum+0.05);
//   } else {
//     contrast = (c2Lum+0.05)/(c1Lum+0.05);
//   }

//   // return contrast;
//   return Math.round(contrast * 1000) / 1000;
// }

export default function calcContrast(c1,c2) {
  let c1Lum = 0;
  let c2Lum = 0;
  let contrast = 0;

  if (c1.hasOwnProperty("lum")) {
    c1Lum = c1.lum;
  } else if (c1 >= 0 || c1 <= 1) {
    c1Lum = c1;
  } else {
    throw new Error(`Invalid input (${c1}).`);
  }

  if (c2.hasOwnProperty("lum")) {
    c2Lum = c2.lum;
  } else if (c2 >= 0 || c2 <= 1) {
    c2Lum = c2;
  } else {
    throw new Error(`Invalid input (${c2}).`);
  }

  if (c1Lum === c2Lum) {
    contrast = 1;
  } else if (c1Lum > c2Lum) {
    contrast = (c1Lum+0.05)/(c2Lum+0.05);
  } else {
    contrast = (c2Lum+0.05)/(c1Lum+0.05);
  }

  return contrast;
}
