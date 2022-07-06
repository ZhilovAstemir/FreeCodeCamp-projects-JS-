// Roman Numeral
// Solution for Roman Numeral Converter

function convertToRoman(num) {
  let nums = {
    0: "",
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "DCCC",
    900: "CM",
    1000: "M",
  };
  let tho = num - Math.floor(num % 1000);
  let hun = num - tho - ((num - tho) % 100);
  let dec = num - tho - hun - ((num - tho - hun) % 10);
  let unit = num % 10;
  if (tho <= 1000) {
    return `${nums[tho]}${nums[hun]}${nums[dec]}${nums[unit]}`;
  } else {
    return "M" + convertToRoman(num - 1000);
  }
}
