export default function isValidHex(hex) {
  if (typeof hex === 'string') {
    return (
      hex.substring(0,1) === "#" &&
      parseInt(hex.substring(1,3),16) >= 0 &&
      parseInt(hex.substring(1,3),16) <= 255 &&
      parseInt(hex.substring(3,5),16) >= 0 &&
      parseInt(hex.substring(3,5),16) <= 255 &&
      parseInt(hex.substring(5,7),16) >= 0 &&
      parseInt(hex.substring(5,7),16) <= 255
    )
  }

  return false;
}
