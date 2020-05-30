/*
convert number to string

二进制 1231
八进制 0x1011
十进制 0o1011
十六进制 0o1011
*/

function convertNumberToString(number, radix) {
  let integer = Math.floor(number);
  let fraction = String(number).match(/\.\d+$/);
  if (fraction) {
    fraction = fraction[0].replace(".", "");
  }
  let string = "";
  while (integer > 0) {
    string = String(integer % radix) + string;
    integer = Math.floor(integer / radix);
  }
  return fraction ? `${string}.${fraction}` : string;
}

console.log(convertNumberToString(100.01, 10));
