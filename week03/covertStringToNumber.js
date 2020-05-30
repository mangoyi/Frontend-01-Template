function convertStringToNumber(string, x) {
  if (arguments.length < 2) x = 10;

  var chars = string.split("");
  var number = 0;
  var i = 0;
  while (i < chars.length && chars[i] != ".") {
    number = number * 10;
    number += chars[i].codePointAt(0) - "0".codePointAt(0);
    i++;
  }

  if (chars[i] === '.')
    i++;

  var fraction = 1;
  while(i < chars.length) {
      fraction = fraction / x;
      number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fraction;
      i++;
  }

  return number;
}

console.log(convertStringToNumber("10011010010", 2));
console.log(parseInt("100.1029"));
