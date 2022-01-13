export default function calcPerceivedLightness({r,g,b}) {
  let vR = r / 255;
  let vG = g / 255;
  let vB = b / 255;

  function toLinear(channel) {
    let linear = 0;
    if (channel <= 0.04045) {
      linear = channel / 12.92
    } else {
      linear = Math.pow((( channel + 0.055)/1.055),2.4);
    }
    return linear;
  }

  let lumY = (0.2126 * toLinear(vR) + 0.7152 * toLinear(vG) + 0.0722 * toLinear(vB));

  function lumYtoLstar(y) {
    let lstar = 0;

    if ( y <= (216/24389)) {   // The CIE standard states 0.008856 but 216/24389 is the intent for 0.008856451679036
      lstar = y * (24389/27);  // The CIE standard states 903.3, but 24389/27 is the intent, making 903.296296296296296
    } else {
      lstar = Math.pow(y,(1/3)) * 116 - 16;
    }

    return lstar;
  }

  // lstar is 0-100 - we want it to be 0-1 with 3 decimal places.
  // Hence the multiplying by 10, rounding and dividing by 1000.
  return Math.round(lumYtoLstar(lumY) * 10) / 1000;
}
