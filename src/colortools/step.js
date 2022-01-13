import createColor from "./createColor";

export default function step(cFrom,cTo,steps) {
  let stepsR = [];
  let stepsG = [];
  let stepsB = [];

  let rStepLength = Math.round((cTo.r-cFrom.r)/(steps+1));
  let gStepLength = Math.round((cTo.g-cFrom.g)/(steps+1));
  let bStepLength = Math.round((cTo.b-cFrom.b)/(steps+1));

  for (let i = 0; i < steps; i++) {
    stepsR[i] = cFrom.r + rStepLength*(i+1);
    stepsG[i] = cFrom.g + gStepLength*(i+1);
    stepsB[i] = cFrom.b + bStepLength*(i+1);
  }

  let colorSteps = [];

  for (let i = 0; i < steps; i++) {
    colorSteps[i] = createColor({r: stepsR[i], g: stepsG[i], b: stepsB[i]});
  }

  return colorSteps;
}
